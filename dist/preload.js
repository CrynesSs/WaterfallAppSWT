// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('myAPI', {
    changeTitle: (title) => ipcRenderer.send('set-title', title)
});
//# sourceMappingURL=preload.js.map