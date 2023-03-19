"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventHandler_1 = require("./Handlers/EventHandler");
const mongo_1 = require("./Database/mongo");
//Attach the Events to our App
EventHandler_1.EventHandler.getEventHandler().attachEvents();
mongo_1.MongoDBHandler.getMongoDBHandler().connect();
//# sourceMappingURL=main.js.map