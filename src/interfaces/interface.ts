import { Document } from "mongoose";
export interface AvailableResourceInterface extends Document {
  name: string;
  type: number;
  description: string;
  contactName: string;
  phoneNumber: string;
  location: {
    type: string;
    coordinates: number[];
  };
  city: string;
  address: string;
  verified: number;
  source: string;
  like: number;
}

export interface ResourceRequestInterface extends Document {
  name: string;
  type: number;
  description: string;
  location: {
    type: string;
    coordinates: number[];
  };
  city: string;
  address: string;
  contactName: string;
  phoneNumber: string;
  quantity: string;
  like: number;
}
