import { Document } from "mongoose";
export interface AvailableResourceInterface extends Document {
  name: string;
  type: number;
  description: string;
  contactName: string;
  phoneNumber: string;
  location: {
    type: {
      type: string,
      enum: string[]
    },
    coordinates: {
      type: number[]
    },
    index: string
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
    type: {
      type: string;
      enum: string[];
    };
    coordinates: {
      type: number[];
    };
    index: string;
  };
  city: string;
  address: string;
  contactName: string;
  phoneNumber: string;
  quantity: string;
  like: number;
}
