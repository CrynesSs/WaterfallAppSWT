import IpcMainEvent = Electron.IpcMainEvent;


export const LoginEventHandler = (event : IpcMainEvent, formData : FormData)=>{
    if(formData){
        console.log(formData + " from LoginEventHandler")
    }

}