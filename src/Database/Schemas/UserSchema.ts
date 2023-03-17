import {model, Schema} from "mongoose";

export const UserSchema : Schema = new Schema({
    name : {
        type : String,
        required:true
    }
    },{
    bufferCommands: false,
    autoCreate: false
    }
)
export const UserModel = model('user',UserSchema)

