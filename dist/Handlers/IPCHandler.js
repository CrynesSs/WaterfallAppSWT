"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPCHandler = void 0;
const electron_1 = require("electron");
const setTitleEvent_1 = require("../PacketHandlers/setTitleEvent");
const loginEvent_1 = require("../PacketHandlers/loginEvent");
class IPCHandler {
    constructor() {
    }
    attachIPC() {
        electron_1.ipcMain.on('set-title', setTitleEvent_1.TitleEventHandler);
        electron_1.ipcMain.on('send-login-data', loginEvent_1.LoginEventHandler);
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