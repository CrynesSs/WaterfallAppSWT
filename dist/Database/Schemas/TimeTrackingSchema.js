"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTrackingModel = exports.TimeTrackingSchema = void 0;
const mongoose_1 = require("mongoose");
const MonthlyTrackingSchema_1 = require("./MonthlyTrackingSchema");
exports.TimeTrackingSchema = new mongoose_1.Schema({
    flex_time: {
        type: Number,
        min: -100,
        max: 100,
        default: 0
    },
    vacation_days_left: {
        type: Number,
        min: -30,
        max: 100,
        default: 30
    },
    time_by_month: {
        months_saved: [MonthlyTrackingSchema_1.MonthlyTrackingSchema]
    }
}, {
    bufferCommands: false,
    autoCreate: false
});
exports.TimeTrackingModel = (0, mongoose_1.model)('time_tracking', exports.TimeTrackingSchema);
//# sourceMappingURL=TimeTrackingSchema.js.map