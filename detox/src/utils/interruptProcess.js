const npmlog = require('npmlog');

async function interruptProcess(childProcessPromise, signal = 'SIGINT') {
  const process = childProcessPromise.childProcess;
  const spawnargs = [process.spawnfile, ...process.spawnargs];

  npmlog.verbose('interruptProcess', 'sending %s to pid %s (%j)',
    signal,
    childProcessPromise.childProcess.pid,
    spawnargs
  );

  childProcessPromise.childProcess.kill(signal);
  await childProcessPromise.catch(e => {
    /* istanbul ignore if */
    if (e.exitCode != null) {
      throw e;
    }
  });
}

module.exports = interruptProcess;