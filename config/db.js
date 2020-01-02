const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(`MongoDb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

module.exports = connectDb;
