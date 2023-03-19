"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    bufferCommands: false,
    autoCreate: false
});
exports.UserModel = (0, mongoose_1.model)('user', exports.UserSchema);
//# sourceMappingURL=UserSchema.js.map