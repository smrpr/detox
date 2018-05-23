const fs = require('fs-extra');
const tempfile = require('tempfile');
const log = require('npmlog');
const { Tail } = require('tail');
const ensureMove = require('../../../utils/ensureMove');
const RecordingArtifact = require('../../base/RecordingArtifact');

class SimulatorLogRecording extends RecordingArtifact {
  constructor({
    appleSimUtils,
    udid,
  }) {
    super();

    this._logPath = tempfile('.log');

    const { stdout, stderr } = appleSimUtils.getLogsPaths(udid);
    this._stdoutPath = stdout;
    this._stderrPath = stderr;

    this._logStream = null;
    this._stdoutTail = null;
    this._stderrTail = null;
  }

  static isTailingLogForFirstTime(filename) {
    return SimulatorLogRecording.tailedLogs.has(filename);
  }

  static markLogAsBeingTailed(filename) {
    SimulatorLogRecording.tailedLogs.add(filename);
  }

  async doStart() {
    await fs.ensureFile(this._logPath);
    this._logStream = fs.createWriteStream(this._logPath, { flags: 'w' });
    this._stdoutTail = this._createTail(this._stdoutPath, 'stdout');
    this._stderrTail = this._createTail(this._stderrPath, 'stderr');
  }

  async doStop() {
    this._stdoutTail.unwatch();
    this._stderrTail.unwatch();
    this._logStream.end();
  }

  async doSave(artifactPath) {
    await ensureMove(this._logPath, artifactPath, '.log');
  }

  async doDiscard() {
    await fs.remove(this._logPath);
  }

  _createTail(file, prefix) {
    const fromBeginning = SimulatorLogRecording.isTailingLogForFirstTime(file);

    const tail = new Tail(file, {
      fromBeginning,
      logger: {
        info: (...args) => log.verbose(`simulator-log-${prefix}`, ...args),
        error: (...args) => log.error(`simulator-log-${prefix}`, ...args),
      },
    }).on('line', (line) => {
      this._appendLine(prefix, line);
    });

    if (fromBeginning) {
      this._triggerTailReadUsingHack(tail);
      SimulatorLogRecording.markLogAsBeingTailed(file);
    }

    return tail;
  }

  /***
   * @link https://github.com/lucagrulla/node-tail/issues/40
   */
  _triggerTailReadUsingHack(tail) {
    tail.watchEvent.call(tail, "change");
  }

  _appendLine(prefix, line) {
    this._logStream.write(prefix);
    this._logStream.write(': ');
    this._logStream.write(line);
    this._logStream.write('\n');
  }
}

SimulatorLogRecording.tailedLogs = new Set();

module.exports = SimulatorLogRecording;

