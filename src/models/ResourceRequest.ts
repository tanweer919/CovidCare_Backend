import mongoose, { Model } from "mongoose";
import { ResourceRequestInterface } from "../interfaces/interface";
const ResourceRequestSchema = new mongoose.Schema<ResourceRequestInterface>({
  name: String,
  type: Number,
  description: String,
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
    index: "2dsphere",
  },
  city: String,
  address: String,
  contactName: String,
  phoneNumber: String,
  quantity: String,
  like: Number,
});

const ResourceRequest: Model<ResourceRequestInterface> = mongoose.model(
  "AvailableResource",
  ResourceRequestSchema
);

export default ResourceRequest;
