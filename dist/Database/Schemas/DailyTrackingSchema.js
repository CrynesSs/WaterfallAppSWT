"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyTrackingModel = exports.DailyTrackingSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DailyTrackingSchema = new mongoose_1.Schema({
    date: {
        type: Date,
        default: new Date(Date.now())
    },
    begin: {
        type: Date,
        default: new Date()
    },
    end: {
        type: Date,
        default: new Date()
    },
    time_delta: {
        type: Date,
        default: new Date()
    },
    hours_target: {
        type: Number,
        default: 8
    },
    break_time: {
        type: Date,
        default: new Date()
    },
    absence: {
        type: String,
        enum: ['No', 'Sick', 'Travel', 'Flex Time', 'Vacation', 'Yes']
    },
    comment: {
        type: String,
        maxlength: 255
    }
}, {
    autoCreate: false
});
exports.DailyTrackingModel = (0, mongoose_1.model)('daily_tracking', exports.DailyTrackingSchema);
//# sourceMappingURL=DailyTrackingSchema.js.map