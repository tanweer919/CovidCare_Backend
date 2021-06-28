import mongoose, { Model } from "mongoose";
import { AvailableResourceDocument } from "../interfaces/interface";
const availableResourceSchema = new mongoose.Schema<AvailableResourceDocument>({
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
  created: { type: Date, default: Date.now },
});

availableResourceSchema.index({ location: "2dsphere" });
const AvailableResource: Model<AvailableResourceDocument> = mongoose.model(
  "AvailableResource",
  availableResourceSchema
);

export default AvailableResource;
