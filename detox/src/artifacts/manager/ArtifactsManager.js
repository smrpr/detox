const _ = require('lodash');
const log = require('npmlog');
const argparse = require('../../utils/argparse');

const ArtifactPathBuilder =  require('./ArtifactPathBuilder');
const RecorderLifecycle = require('./RecorderLifecycle');
const SnapshotterLifecycle = require('./SnapshotterLifecycle');

class ArtifactsManager {
  constructor() {
    this._enqueueFinalizationTask = this._enqueueFinalizationTask.bind(this);
    this._interceptArtifact = this._interceptArtifact.bind(this);

    this._hooks = [];
    this._artifacts = [];
    this._finalizationPromise = Promise.resolve();

    this._pathBuilder = new ArtifactPathBuilder({
      artifactsRootDir: argparse.getArgValue('artifacts-location') || 'artifacts',
    });
  }

  setCapabilities(artifactFactories) {
    const artifactTypes = Object.keys(artifactFactories || {});

    for (const artifactType of artifactTypes) {
      const isEnabledFn = ArtifactsManager.capabilitiesSwitches[artifactType];
      const isEnabled = isEnabledFn ? isEnabledFn() : false;

      if (!isEnabled) {
        continue;
      }

      const createLifecycleFn = ArtifactsManager.capabilitiesLifecycle[artifactType];
      const lifecycle = createLifecycleFn({
        createArtifact: artifactFactories[artifactType],
        enqueueFinalizationTask: this._enqueueFinalizationTask,
        pathBuilder: this._pathBuilder,
      });

      this._hooks.push(lifecycle);
    }
  }

  async onStart() {
    await Promise.all(this._hooks.map(hook => hook.onStart()));
  }

  async onBeforeTest(testSummary) {
    await Promise.all(this._hooks.map(hook => hook.onBeforeTest(testSummary)));
  }

  async onAfterTest(testSummary) {
    await Promise.all(this._hooks.map(hook => hook.onAfterTest(testSummary)));
  }

  async onExit() {
    await Promise.all(this._hooks.map(hook => hook.onExit()));
    await this._finalizationPromise;
  }

  async onShutdown() {
    await Promise.all(this._artifacts.map(r => r.discard()));
    await this._finalizationPromise;
  }

  _interceptArtifact(createArtifact) {
    return (...args) => {
      const artifact = createArtifact(...args);
      this._artifacts.push(artifact);
      return artifact;
    };
  }

  _enqueueFinalizationTask(finalizationFunction) {
    this._finalizationPromise = this._finalizationPromise
      .then(finalizationFunction)
      .catch(this._suppressFinalizationError);

    return this._finalizationPromise;
  }

  _suppressFinalizationError(e) {
    log.error('ArtifactsManager', 'Finalization error:\n%j', e);
  }
}

ArtifactsManager.capabilitiesSwitches = {
  log: () => argparse.getArgValue('record-logs') || 'none',
  screenshot: () => argparse.getArgValue('take-screenshots') || 'none',
  video: () => argparse.getArgValue('record-videos') || 'none',
};

ArtifactsManager.capabilitiesLifecycle = {
  log: ({ createArtifact, pathBuilder, enqueueFinalizationTask }) => {
    return new RecorderLifecycle({
      shouldRecordStartup: true,
      keepOnlyFailedTestsRecordings: argparse.getArgValue("record-logs") === "failing",
      pathBuilder,
      createArtifact,
      enqueueFinalizationTask
    });
  },
  screenshot: ({ createArtifact, pathBuilder, enqueueFinalizationTask }) => {
    return new SnapshotterLifecycle({
      keepOnlyFailedTestsSnapshots: argparse.getArgValue("take-screenshots") === "failing",
      pathBuilder,
      createArtifact,
      enqueueFinalizationTask
    });
  },
  video: ({ createArtifact, pathBuilder, enqueueFinalizationTask }) => {
    return new RecorderLifecycle({
      shouldRecordStartup: false,
      keepOnlyFailedTestsRecordings: argparse.getArgValue("record-videos") === "failing",
      pathBuilder,
      createArtifact,
      enqueueFinalizationTask
    });
  },
};

module.exports = ArtifactsManager;