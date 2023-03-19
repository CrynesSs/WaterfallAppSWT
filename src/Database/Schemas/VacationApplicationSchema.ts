import {model, Schema} from "mongoose";
import {UserSchema} from "./UserSchema";


export const VacationApplicationSchema : Schema = new Schema({
    applicant : {
        type : UserSchema,
        required : true
    },
    start_date : {
        type : Date,
        default : Date.now(),
        required : true
    },
    end_date : {
        type : Date,
        default : Date.now(),
        required : true
    },
    status : {
        type : String,
        enum:['Approved','Denied','In Progress','Canceled by User']
    }
})

export const VacationApplicationModel = model('vacation_application',VacationApplicationSchema)