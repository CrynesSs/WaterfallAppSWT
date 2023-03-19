"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabaseCollections = exports.connect = void 0;
const UserSchema_1 = require("./Schemas/UserSchema");
const dotenv_1 = require("dotenv");
const mongoose = require("mongoose");
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, dotenv_1.config)();
    console.log(process.env.MONGO_PATH);
    return mongoose.connect(process.env.MONGO_PATH, {
        connectTimeoutMS: 1500
    });
});
exports.connect = connect;
const createDatabaseCollections = () => __awaiter(void 0, void 0, void 0, function* () {
    yield UserSchema_1.UserModel.createCollection();
});
exports.createDatabaseCollections = createDatabaseCollections;
//# sourceMappingURL=mongo.js.map