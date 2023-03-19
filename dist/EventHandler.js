"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
const electron_1 = require("electron");
const ready_1 = require("./Eventhandlers/ready");
const onWindowAllClosed_1 = require("./Eventhandlers/onWindowAllClosed");
class EventHandler {
    constructor() {
        electron_1.app.on('ready', ready_1.readyHandler);
        electron_1.app.on('window-all-closed', () => (0, onWindowAllClosed_1.onWindowAllClosedHandler)(electron_1.app));
        electron_1.app.on('activate', ready_1.readyHandler);
    }
}
exports.EventHandler = EventHandler;
//# sourceMappingURL=EventHandler.js.map