import IpcMainEvent = Electron.IpcMainEvent;


export const LoginEventHandler = (event : IpcMainEvent, formData : FormData)=>{
    console.log(formData)
}