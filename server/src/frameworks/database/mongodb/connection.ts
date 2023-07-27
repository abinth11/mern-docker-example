import mongoose from "mongoose";
import CONFIG from "../../../config";
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(CONFIG.MONGO_DB_URL, {
      dbName: CONFIG.DB_NAME,
    });
    console.log(`Database connected successfully`);
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
