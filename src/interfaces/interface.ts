import { Document } from "mongoose";
export interface AvailableResourceInterface {
  id: string;
  name: string;
  type: number;
  description?: string;
  contactName: string;
  phoneNumber: string;
  location: {
    type: string;
    coordinates: number[];
  };
  city: string;
  address: string;
  available: number;
  verified: number;
  source: string;
  like: number;
  created: Date;
}

export interface ResourceRequestInterface {
  id: string;
  name: string;
  type: number;
  description?: string;
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
  created: Date;
}

export interface AvailableResourceDocument extends Document {
  name: string;
  type: number;
  description?: string;
  contactName: string;
  phoneNumber: string;
  location: {
    type: string;
    coordinates: number[];
  };
  city: string;
  address: string;
  available: number;
  verified: number;
  source: string;
  like: number;
  created: Date;
}

export interface ResourceRequestDocument extends Document {
  name: string;
  type: number;
  description?: string;
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
  created: Date;
}

export interface AutoComplete {
  term: string;
  placeId: string;
}

export interface PlaceDetail {
  lat?: string;
  lng?: string;
  city?: string;
}

export interface City {
  name?: string
}
