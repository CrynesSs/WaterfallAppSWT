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
exports.MongoDBHandler = void 0;
const UserSchema_1 = require("./Schemas/UserSchema");
const dotenv_1 = require("dotenv");
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const VacationApplicationSchema_1 = require("./Schemas/VacationApplicationSchema");
class MongoDBHandler {
    constructor() {
        this.connect = () => {
            mongoose.connect(process.env.MONGO_PATH, {
                connectTimeoutMS: 1500
            }).then(() => {
                console.log(`Connected to MongoDB Database ${mongoose_1.connection.db.databaseName}`);
                this.createDatabaseCollections().then(() => console.log('Finished Creating Database Tables, Database is Operational'));
            }).catch(() => {
                throw new Error('Unable to open Database,quitting');
            });
        };
        this.createDatabaseCollections = () => __awaiter(this, void 0, void 0, function* () {
            yield UserSchema_1.UserModel.createCollection().then(res => console.log(`Created Database Table with Name : ${res.collectionName}`));
            yield VacationApplicationSchema_1.VacationApplicationModel.createCollection().then(res => console.log(`Created Database Table with Name : ${res.collectionName}`));
        });
        this.closeConnection = () => __awaiter(this, void 0, void 0, function* () {
            return mongoose_1.connection.close(true);
        });
        (0, dotenv_1.config)();
    }
    static getMongoDBHandler() {
        if (MongoDBHandler.mongoDBHandler == null) {
            MongoDBHandler.mongoDBHandler = new MongoDBHandler();
        }
        return MongoDBHandler.mongoDBHandler;
    }
}
exports.MongoDBHandler = MongoDBHandler;
MongoDBHandler.mongoDBHandler = null;
//# sourceMappingURL=mongo.js.map