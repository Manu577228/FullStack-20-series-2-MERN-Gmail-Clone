import mongoose from "mongoose";

const Connection = () => {
    const DB_URI = `mongodb://bnmanubharadwaj:root@ac-myl8beg-shard-00-00.0x763td.mongodb.net:27017,ac-myl8beg-shard-00-01.0x763td.mongodb.net:27017,ac-myl8beg-shard-00-02.0x763td.mongodb.net:27017/?ssl=true&replicaSet=atlas-13vimc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        // mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;