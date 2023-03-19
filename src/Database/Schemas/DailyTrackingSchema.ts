import {model, Schema} from "mongoose";


export const DailyTrackingSchema: Schema = new Schema({
    date: {
        type: Date,
        default: new Date(Date.now())
    },
    begin: {
        type : Date,
        default : new Date()
    },
    end: {
        type : Date,
        default : new Date()
    },
    time_delta : {
        type : Date,
        default : new Date()
    },
    hours_target: {
        type: Number,
        default: 8
    },
    break_time: {
        type : Date,
        default : new Date()
    },
    absence : {
        type : String,
        enum : ['No','Sick','Travel','Flex Time','Vacation','Yes']
    },
    comment : {
        type : String,
        maxlength : 255
    }
},{
    autoCreate : false
})

export const DailyTrackingModel = model('daily_tracking',DailyTrackingSchema)