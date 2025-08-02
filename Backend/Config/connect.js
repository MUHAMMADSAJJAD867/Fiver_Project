import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_Url);
    console.log(
      `Database is connected at host:${mongoose.connection.host.cyan}`
    );
  } catch (error) {
    console.log("server is not started");
  }
};
