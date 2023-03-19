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
exports.onWindowAllClosedHandler = void 0;
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
const mongo_1 = require("../Database/mongo");
const onWindowAllClosedHandler = (app) => __awaiter(void 0, void 0, void 0, function* () {
    yield mongo_1.MongoDBHandler.getMongoDBHandler().closeConnection().then(() => console.log('Closed Connection successfully'));
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
exports.onWindowAllClosedHandler = onWindowAllClosedHandler;
//# sourceMappingURL=onWindowAllClosed.js.map