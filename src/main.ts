import {EventHandler} from "./Handlers/EventHandler";
import {MongoDBHandler} from "./Database/mongo";


//Attach the Events to our App
EventHandler.getEventHandler().attachEvents()
MongoDBHandler.getMongoDBHandler().connect()
