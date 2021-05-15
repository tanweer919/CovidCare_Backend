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
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    available: Number,
    city: String,
    address: String,
    verified: Number,
    source: String,
    like: Number,
  }
);

availableResourceSchema.index({ location: "2dsphere" });
const AvailableResource: Model<AvailableResourceInterface> = mongoose.model(
  "AvailableResource",
  availableResourceSchema
);

export default AvailableResource;
