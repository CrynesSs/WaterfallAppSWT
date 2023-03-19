import {model, Schema} from "mongoose";
import {TimeTrackingSchema} from "./TimeTrackingSchema";

export const UserSchema : Schema = new Schema({
    username : {
        type : String,
        required:true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    time_tracking : {
        type : TimeTrackingSchema,
        required : true
    },
    creation_date : {
        type : Date,
        default : Date.now()
    }
    },{
    bufferCommands: false,
    autoCreate: false,
    query : {
        byUserName(name){
            return this.where({username:new RegExp(name,'i')})
        }
    }
    }
)
export const UserModel = model('user',UserSchema)

