import {BrowserWindow} from "electron";
import * as path from "path";


export const readyHandler = async () => {
    // On macOS, it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
}

// Create the browser window.
function createWindow() {
    const mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            preload: path.join(__dirname, "../Client/preload.js"),
        },
        show: false
    });
    // and load the index.html of the app.
    mainWindow
        .loadFile(path.join(__dirname, "../../index.html"))
        .then(() => {
            //prevents white flickering when not ready to show
            mainWindow.once('ready-to-show', () => {
                mainWindow.show()
            })
        })
        .catch(reason => console.log(reason));
    // Open the DevTools.
    //mainWindow.webContents.openDevTools();


}

