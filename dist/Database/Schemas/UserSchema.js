"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const TimeTrackingSchema_1 = require("./TimeTrackingSchema");
exports.UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    time_tracking: {
        type: TimeTrackingSchema_1.TimeTrackingSchema,
        required: true
    },
    creation_date: {
        type: Date,
        default: Date.now()
    }
}, {
    bufferCommands: false,
    autoCreate: false,
    query: {
        byUserName(name) {
            return this.where({ username: new RegExp(name, 'i') });
        }
    }
});
exports.UserModel = (0, mongoose_1.model)('user', exports.UserSchema);
//# sourceMappingURL=UserSchema.js.map