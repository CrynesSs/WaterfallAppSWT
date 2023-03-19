import {model, Schema} from "mongoose";
import {DailyTrackingSchema} from "./DailyTrackingSchema";


export const MonthlyTrackingSchema : Schema = new Schema({
    month : {
        type : Number,
        min : 0,
        max : 11,
        default : new Date(Date.now()).getMonth()
    },
    year : {
        type : Number,
        default : new Date(Date.now()).getFullYear()
    },
    times : {
        type : [DailyTrackingSchema],
        required : true
    }
},{
    autoCreate : false
})

export const MonthlyTrackingModel = model('monthly_tracking',MonthlyTrackingSchema)