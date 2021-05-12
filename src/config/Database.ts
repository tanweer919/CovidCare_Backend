import mongoose from "mongoose";

export const connectToDatabase = async () => {
  mongoose.Promise = global.Promise;
  try {
    await mongoose.connect(
    process.env.NODE_ENV == "production"
    ? process.env.MONGODB_PRODUCTION_URL
    : process.env.MONGODB_DEVELOPMENT_URL,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  } catch(e) {
    console.log(e);
  }
};
