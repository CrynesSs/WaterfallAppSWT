import {ipcMain} from "electron";
import {TitleEventHandler} from "../PacketHandlers/setTitleEvent";


export class IPCHandler{
    private static ipcHandler : IPCHandler = null;
    constructor() {

    }
    attachIPC() {
        ipcMain.on('set-title', TitleEventHandler);
    }
    static getIPCHandler(){
        if(IPCHandler.ipcHandler == null){
            IPCHandler.ipcHandler = new IPCHandler();
        }
        return IPCHandler.ipcHandler;
    }
}