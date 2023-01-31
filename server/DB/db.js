import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const databaseConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://akashchandra62:akash@cluster0.qsnjo.mongodb.net/blackcoffer?retryWrites=true&w=majority"
    )
    .then((res) => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log("Error in connecting to Databse", error);
    });
};

export default databaseConnection;
