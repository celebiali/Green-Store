const mongoose = require("mongoose");
const db = () => {
  mongoose
    .connect(
      "mongodb+srv://ali1999_:D4nMLn2gAJl0KjTE@green-store.42fq8ja.mongodb.net/",
      {
        dbName: "green-store",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoDb Connected");
    })
    .catch((err) => {
      console.error("MongoDb Connection Error:", err);
    });
};
module.exports = db;
