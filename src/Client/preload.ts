// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import {contextBridge, ipcRenderer} from 'electron';

interface MyAPI {
    changeTitle(name: string): Promise<string>;
    sendLoginForm(formData : FormData): Promise<FormData>;
}
contextBridge.exposeInMainWorld('myAPI', {
    changeTitle: (title : String) => ipcRenderer.send('set-title', title),
    sendLoginForm:(formData : String[]) => ipcRenderer.send('send-login-data',formData)
})



