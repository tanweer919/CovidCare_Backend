import mongoose, { Model } from "mongoose";
import {AvailableResourceInterface} from "../interfaces/interface"
const availableResourceSchema = new mongoose.Schema<AvailableResourceInterface>(
  {
    name: String,
    type: Number,
    description: String,
    contactName: String,
    phoneNumber: String,
    lat: String,
    long: String,
    city: String,
    address: String,
    verified: Number,
    source: String,
    location: String,
    like: Number,
  }
);

const AvailableResource: Model<AvailableResourceInterface> = mongoose.model("AvailableResource", availableResourceSchema);

export default AvailableResource;