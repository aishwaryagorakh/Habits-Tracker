import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://aishwaryagorakhshinde:WVNim11LygbUXFwJ@cluster2.kh1m9ia.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2"
    );
    console.log("MongoDB connected using mongoose");
  } catch (error) {
    console.log(error);
  }
};
