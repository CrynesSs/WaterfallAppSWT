import {ipcMain} from "electron";
import {TitleEventHandler} from "../PacketHandlers/setTitleEvent";
import {LoginEventHandler} from "../PacketHandlers/loginEvent";


export class IPCHandler{
    private static ipcHandler : IPCHandler = null;
    constructor() {

    }
    attachIPC() {
        ipcMain.on('set-title', TitleEventHandler);
        ipcMain.on('send-login-data',LoginEventHandler)
    }
    static getIPCHandler(){
        if(IPCHandler.ipcHandler == null){
            IPCHandler.ipcHandler = new IPCHandler();
        }
        return IPCHandler.ipcHandler;
    }
}