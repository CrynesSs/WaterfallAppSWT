"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleEventHandler = void 0;
const electron_1 = require("electron");
const TitleEventHandler = (event, title) => {
    const webContents = event.sender;
    const win = electron_1.BrowserWindow.fromWebContents(webContents);
    win.setTitle(title);
};
exports.TitleEventHandler = TitleEventHandler;
//# sourceMappingURL=setTitleEvent.js.map