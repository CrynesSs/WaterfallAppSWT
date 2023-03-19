"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readyHandler = void 0;
const electron_1 = require("electron");
const path = require("path");
const readyHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    // On macOS, it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0)
        createWindow();
});
exports.readyHandler = readyHandler;
// Create the browser window.
function createWindow() {
    const mainWindow = new electron_1.BrowserWindow({
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
            mainWindow.show();
        });
    })
        .catch(reason => console.log(reason));
    // Open the DevTools.
    //mainWindow.webContents.openDevTools();
}
//# sourceMappingURL=ready.js.map