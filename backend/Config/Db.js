const mongoose = require('mongoose');

const ConnectTODB = async() => {
    // Connect to DB
    try {
        await mongoose.connect(process.env.MONGO_DB_URL );
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("Connection failed DB");
        console.error("Error : " + error);
        process.exit(1);
    }
}
module.exports = ConnectTODB;