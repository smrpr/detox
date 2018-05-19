/**

	This code is generated.
	For more information see generation/README.md.
*/



class UiDevice {
  static setCompressedLayoutHeirarchy(element, compressed) {
    if (typeof compressed !== "boolean") throw new Error("compressed should be a boolean, but got " + (compressed + (" (" + (typeof compressed + ")"))));
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "setCompressedLayoutHeirarchy",
      args: [{
        type: "boolean",
        value: compressed
      }]
    };
  }

  static getInstance() {
    return {
      target: {
        type: "Class",
        value: "com.android.uiautomator.core.UiDevice"
      },
      method: "getInstance",
      args: []
    };
  }

  static getDisplaySizeDp(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "getDisplaySizeDp",
      args: []
    };
  }

  static getProductName(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "getProductName",
      args: []
    };
  }

  static getLastTraversedText(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "getLastTraversedText",
      args: []
    };
  }

  static clearLastTraversedText(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "clearLastTraversedText",
      args: []
    };
  }

  static pressMenu(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressMenu",
      args: []
    };
  }

  static pressBack(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressBack",
      args: []
    };
  }

  static pressHome(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressHome",
      args: []
    };
  }

  static pressSearch(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressSearch",
      args: []
    };
  }

  static pressDPadCenter(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressDPadCenter",
      args: []
    };
  }

  static pressDPadDown(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressDPadDown",
      args: []
    };
  }

  static pressDPadUp(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressDPadUp",
      args: []
    };
  }

  static pressDPadLeft(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressDPadLeft",
      args: []
    };
  }

  static pressDPadRight(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressDPadRight",
      args: []
    };
  }

  static pressDelete(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressDelete",
      args: []
    };
  }

  static pressEnter(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressEnter",
      args: []
    };
  }

  static pressKeyCode(element, keyCode) {
    if (typeof keyCode !== "number") throw new Error("keyCode should be a number, but got " + (keyCode + (" (" + (typeof keyCode + ")"))));
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressKeyCode",
      args: [{
        type: "Integer",
        value: keyCode
      }]
    };
  }

  static pressKeyCode(element, keyCode, metaState) {
    if (typeof keyCode !== "number") throw new Error("keyCode should be a number, but got " + (keyCode + (" (" + (typeof keyCode + ")"))));
    if (typeof metaState !== "number") throw new Error("metaState should be a number, but got " + (metaState + (" (" + (typeof metaState + ")"))));
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressKeyCode",
      args: [{
        type: "Integer",
        value: keyCode
      }, {
        type: "Integer",
        value: metaState
      }]
    };
  }

  static pressRecentApps(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "pressRecentApps",
      args: []
    };
  }

  static openNotification(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "openNotification",
      args: []
    };
  }

  static openQuickSettings(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "openQuickSettings",
      args: []
    };
  }

  static getDisplayWidth(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "getDisplayWidth",
      args: []
    };
  }

  static getDisplayHeight(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "getDisplayHeight",
      args: []
    };
  }

  static click(element, x, y) {
    if (typeof x !== "number") throw new Error("x should be a number, but got " + (x + (" (" + (typeof x + ")"))));
    if (typeof y !== "number") throw new Error("y should be a number, but got " + (y + (" (" + (typeof y + ")"))));
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "click",
      args: [{
        type: "Integer",
        value: x
      }, {
        type: "Integer",
        value: y
      }]
    };
  }

  static swipe(element, startX, startY, endX, endY, steps) {
    if (typeof startX !== "number") throw new Error("startX should be a number, but got " + (startX + (" (" + (typeof startX + ")"))));
    if (typeof startY !== "number") throw new Error("startY should be a number, but got " + (startY + (" (" + (typeof startY + ")"))));
    if (typeof endX !== "number") throw new Error("endX should be a number, but got " + (endX + (" (" + (typeof endX + ")"))));
    if (typeof endY !== "number") throw new Error("endY should be a number, but got " + (endY + (" (" + (typeof endY + ")"))));
    if (typeof steps !== "number") throw new Error("steps should be a number, but got " + (steps + (" (" + (typeof steps + ")"))));
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "swipe",
      args: [{
        type: "Integer",
        value: startX
      }, {
        type: "Integer",
        value: startY
      }, {
        type: "Integer",
        value: endX
      }, {
        type: "Integer",
        value: endY
      }, {
        type: "Integer",
        value: steps
      }]
    };
  }

  static drag(element, startX, startY, endX, endY, steps) {
    if (typeof startX !== "number") throw new Error("startX should be a number, but got " + (startX + (" (" + (typeof startX + ")"))));
    if (typeof startY !== "number") throw new Error("startY should be a number, but got " + (startY + (" (" + (typeof startY + ")"))));
    if (typeof endX !== "number") throw new Error("endX should be a number, but got " + (endX + (" (" + (typeof endX + ")"))));
    if (typeof endY !== "number") throw new Error("endY should be a number, but got " + (endY + (" (" + (typeof endY + ")"))));
    if (typeof steps !== "number") throw new Error("steps should be a number, but got " + (steps + (" (" + (typeof steps + ")"))));
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "drag",
      args: [{
        type: "Integer",
        value: startX
      }, {
        type: "Integer",
        value: startY
      }, {
        type: "Integer",
        value: endX
      }, {
        type: "Integer",
        value: endY
      }, {
        type: "Integer",
        value: steps
      }]
    };
  }

  static waitForIdle(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "waitForIdle",
      args: []
    };
  }

  static getCurrentActivityName(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "getCurrentActivityName",
      args: []
    };
  }

  static getCurrentPackageName(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "getCurrentPackageName",
      args: []
    };
  }

  static removeWatcher(element, name) {
    if (typeof name !== "string") throw new Error("name should be a string, but got " + (name + (" (" + (typeof name + ")"))));
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "removeWatcher",
      args: [name]
    };
  }

  static runWatchers(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "runWatchers",
      args: []
    };
  }

  static resetWatcherTriggers(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "resetWatcherTriggers",
      args: []
    };
  }

  static hasWatcherTriggered(element, watcherName) {
    if (typeof watcherName !== "string") throw new Error("watcherName should be a string, but got " + (watcherName + (" (" + (typeof watcherName + ")"))));
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "hasWatcherTriggered",
      args: [watcherName]
    };
  }

  static hasAnyWatcherTriggered(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "hasAnyWatcherTriggered",
      args: []
    };
  }

  static setWatcherTriggered(element, watcherName) {
    if (typeof watcherName !== "string") throw new Error("watcherName should be a string, but got " + (watcherName + (" (" + (typeof watcherName + ")"))));
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "setWatcherTriggered",
      args: [watcherName]
    };
  }

  static isNaturalOrientation(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "isNaturalOrientation",
      args: []
    };
  }

  static getDisplayRotation(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "getDisplayRotation",
      args: []
    };
  }

  static freezeRotation(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "freezeRotation",
      args: []
    };
  }

  static unfreezeRotation(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "unfreezeRotation",
      args: []
    };
  }

  static setOrientationLeft(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "setOrientationLeft",
      args: []
    };
  }

  static setOrientationRight(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "setOrientationRight",
      args: []
    };
  }

  static setOrientationNatural(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "setOrientationNatural",
      args: []
    };
  }

  static wakeUp(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "wakeUp",
      args: []
    };
  }

  static isScreenOn(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "isScreenOn",
      args: []
    };
  }

  static sleep(element) {
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "sleep",
      args: []
    };
  }

  static dumpWindowHierarchy(element, fileName) {
    if (typeof fileName !== "string") throw new Error("fileName should be a string, but got " + (fileName + (" (" + (typeof fileName + ")"))));
    return {
      target: {
        type: "Invocation",
        value: element
      },
      method: "dumpWindowHierarchy",
      args: [fileName]
    };
  }

}

module.exports = UiDevice;