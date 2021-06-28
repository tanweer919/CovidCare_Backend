import mongoose, { Model } from "mongoose";
import { ResourceRequestDocument } from "../interfaces/interface";
const resourceRequestSchema = new mongoose.Schema<ResourceRequestDocument>({
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
  },
  city: String,
  address: String,
  contactName: String,
  phoneNumber: String,
  quantity: String,
  like: Number,
  created: { type: Date, default: Date.now },
});

resourceRequestSchema.index({ location: "2dsphere" });

const ResourceRequest: Model<ResourceRequestDocument> = mongoose.model(
  "ResourceRequest",
  resourceRequestSchema
);

export default ResourceRequest;
