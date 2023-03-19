"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyTrackingModel = exports.MonthlyTrackingSchema = void 0;
const mongoose_1 = require("mongoose");
const DailyTrackingSchema_1 = require("./DailyTrackingSchema");
exports.MonthlyTrackingSchema = new mongoose_1.Schema({
    month: {
        type: Number,
        min: 0,
        max: 11,
        default: new Date(Date.now()).getMonth()
    },
    year: {
        type: Number,
        default: new Date(Date.now()).getFullYear()
    },
    times: {
        type: [DailyTrackingSchema_1.DailyTrackingSchema],
        required: true
    }
}, {
    autoCreate: false
});
exports.MonthlyTrackingModel = (0, mongoose_1.model)('monthly_tracking', exports.MonthlyTrackingSchema);
//# sourceMappingURL=MonthlyTrackingSchema.js.map