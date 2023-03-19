"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacationApplicationModel = exports.VacationApplicationSchema = void 0;
const mongoose_1 = require("mongoose");
const UserSchema_1 = require("./UserSchema");
exports.VacationApplicationSchema = new mongoose_1.Schema({
    applicant: {
        type: UserSchema_1.UserSchema,
        required: true
    },
    start_date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    end_date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    status: {
        type: String,
        enum: ['Approved', 'Denied', 'In Progress', 'Canceled by User']
    }
});
exports.VacationApplicationModel = (0, mongoose_1.model)('vacation_application', exports.VacationApplicationSchema);
//# sourceMappingURL=VacationApplicationSchema.js.map