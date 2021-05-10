import mongoose, { Model } from "mongoose";
import { ResourceRequestInterface } from "../interfaces/interface";
const ResourceRequestSchema = new mongoose.Schema<ResourceRequestInterface>({
  name: String,
  type: Number,
  description: String,
  lat: String,
  long: String,
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
