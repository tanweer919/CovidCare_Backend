"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const resourceRequestSchema = new mongoose_1.default.Schema({
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
const ResourceRequest = mongoose_1.default.model("ResourceRequest", resourceRequestSchema);
exports.default = ResourceRequest;
//# sourceMappingURL=ResourceRequest.js.map