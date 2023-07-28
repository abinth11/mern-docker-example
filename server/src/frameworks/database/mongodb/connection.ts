import mongoose from "mongoose";
import CONFIG from "../../../config";

const connectDB = async () => {
  try {
    const options: any = {
      useUnifiedTopology: true,
    };

    await mongoose.connect(CONFIG.CLUSTER_URL, options);
    console.log(`Database connected successfully`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
