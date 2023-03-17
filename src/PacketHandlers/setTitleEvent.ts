import {BrowserWindow} from "electron"
import IpcMainEvent = Electron.IpcMainEvent;


export const TitleEventHandler = (event : IpcMainEvent, title : string) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
}