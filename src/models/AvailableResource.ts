import mongoose, { Model } from "mongoose";
import { AvailableResourceInterface } from "../interfaces/interface";
const availableResourceSchema = new mongoose.Schema<AvailableResourceInterface>(
  {
    name: String,
    type: Number,
    description: String,
    contactName: String,
    phoneNumber: String,
    location: {
      type: {
        type: String, 
        enum: ["Point"], 
      },
      coordinates: {
        type: [Number],
      },
      index: '2dsphere'
    },
    city: String,
    address: String,
    verified: Number,
    source: String,
    like: Number,
  }
);

const AvailableResource: Model<AvailableResourceInterface> = mongoose.model(
  "AvailableResource",
  availableResourceSchema
);

export default AvailableResource;
