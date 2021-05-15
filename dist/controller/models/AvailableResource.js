"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const availableResourceSchema = new mongoose_1.default.Schema({
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
});
availableResourceSchema.index({ location: "2dsphere" });
const AvailableResource = mongoose_1.default.model("AvailableResource", availableResourceSchema);
exports.default = AvailableResource;
//# sourceMappingURL=AvailableResource.js.map