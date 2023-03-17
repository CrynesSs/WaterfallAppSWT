// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
import {MongoDBHandler} from "../Database/mongo";

export const onWindowAllClosedHandler = async (app : Electron.App)=>{
    await MongoDBHandler.getMongoDBHandler().closeConnection().then(()=>console.log('Closed Connection successfully'))
    if (process.platform !== 'darwin') {
        app.quit();
    }
}