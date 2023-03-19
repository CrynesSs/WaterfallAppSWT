"use strict";
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('myAPI', {
    changeTitle: (title) => electron_1.ipcRenderer.send('set-title', title),
    sendLoginForm: (formData) => electron_1.ipcRenderer.send('send-login-data', formData)
});
//# sourceMappingURL=preload.js.map