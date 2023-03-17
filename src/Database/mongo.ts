import {UserModel} from "./Schemas/UserSchema";
import {config} from "dotenv";
import * as mongoose from "mongoose";
import {connection} from "mongoose";

export class MongoDBHandler {
    private static mongoDBHandler: MongoDBHandler = null;

    private constructor() {
        config()
    }

    public static getMongoDBHandler() {
        if (MongoDBHandler.mongoDBHandler == null) {
            MongoDBHandler.mongoDBHandler = new MongoDBHandler();
        }
        return MongoDBHandler.mongoDBHandler;
    }

    connect = () => {
        mongoose.connect(process.env.MONGO_PATH, {
            connectTimeoutMS: 1500
        }).then(() => {
            console.log(`Connected to MongoDB Database ${connection.db.databaseName}`)
            this.createDatabaseCollections().then(()=>console.log('Finished Creating Database Tables, Database is Operational'))
        }).catch(()=>{
            throw new Error('Unable to open Database,quitting')
        })
    }
    createDatabaseCollections = async () => {
        await UserModel.createCollection().then(res => console.log(`Created Database Table with Name : ${res.collectionName}`));
    }
    closeConnection = async () =>{
        return connection.close(true)
    }
}