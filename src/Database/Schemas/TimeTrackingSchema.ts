import {model, Schema} from "mongoose";
import {MonthlyTrackingSchema} from "./MonthlyTrackingSchema";


export const TimeTrackingSchema : Schema = new Schema({
    flex_time : {
        type : Number,
        min : -100,
        max : 100,
        default : 0
    },
    vacation_days_left : {
        type : Number,
        min : -30,
        max : 100,
        default : 30
    },
    time_by_month : {
        months_saved : [MonthlyTrackingSchema]
    }

},{
    bufferCommands : false,
    autoCreate : false
})

export const TimeTrackingModel = model('time_tracking',TimeTrackingSchema)