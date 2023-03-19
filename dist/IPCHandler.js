"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPCHandler = void 0;
const electron_1 = require("electron");
const setTitleEvent_1 = require("./PacketHandlers/setTitleEvent");
class IPCHandler {
    constructor() {
    }
    attachIPC() {
        electron_1.ipcMain.on('set-title', setTitleEvent_1.TitleEventHandler);
    }
    static getIPCHandler() {
        if (IPCHandler.ipcHandler == null) {
            IPCHandler.ipcHandler = new IPCHandler();
        }
        return IPCHandler.ipcHandler;
    }
}
exports.IPCHandler = IPCHandler;
IPCHandler.ipcHandler = null;
//# sourceMappingURL=IPCHandler.js.map