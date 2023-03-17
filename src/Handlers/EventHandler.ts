import {app} from "electron";
import {readyHandler} from "../Eventhandlers/ready";
import {onWindowAllClosedHandler} from "../Eventhandlers/onWindowAllClosed";
import {IPCHandler} from "./IPCHandler";

export class EventHandler {
    private static eventHandler : EventHandler = null;
    private constructor() {

    }
    attachEvents(){
        app.on('ready', readyHandler);
        app.on('window-all-closed', ()=>onWindowAllClosedHandler(app));
        app.on('activate',readyHandler)
        app.once('ready',IPCHandler.getIPCHandler().attachIPC)
    }
    static getEventHandler(){
        if(EventHandler.eventHandler == null){
            EventHandler.eventHandler = new EventHandler()
        }
        return EventHandler.eventHandler;
    }

}