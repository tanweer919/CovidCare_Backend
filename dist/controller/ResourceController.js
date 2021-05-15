"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AvailableResource_1 = __importDefault(require("../models/AvailableResource"));
const ResourceRequest_1 = __importDefault(require("../models/ResourceRequest"));
class ResourceController {
    createAvailableResource(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const availableResource = new AvailableResource_1.default();
                availableResource.name = data["name"];
                availableResource.type = data["type"];
                availableResource.description = data["type"];
                availableResource.contactName = data["contactName"];
                availableResource.phoneNumber = data["phoneNumber"];
                availableResource.city = data["city"];
                availableResource.address = data["address"];
                availableResource.verified = data["verified"];
                availableResource.source = data["source"];
                availableResource.like = 0;
                availableResource.location = {
                    type: "Point",
                    coordinates: [+data["lat"], +data["long"]],
                };
                yield availableResource.save();
                res.status(201).send({ message: "Resource created successfully" });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    createResourceRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const resourceRequest = new ResourceRequest_1.default();
                resourceRequest.name = data["name"];
                resourceRequest.type = data["type"];
                resourceRequest.description = data["type"];
                resourceRequest.contactName = data["contactName"];
                resourceRequest.phoneNumber = data["phoneNumber"];
                resourceRequest.city = data["city"];
                resourceRequest.address = data["address"];
                resourceRequest.quantity = data["quantity"];
                resourceRequest.like = 0;
                resourceRequest.location = {
                    type: "Point",
                    coordinates: [+data["lat"], +data["long"]],
                };
                yield resourceRequest.save();
                res.status(201).send({ message: "Resource created successfully" });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.default = new ResourceController();
//# sourceMappingURL=ResourceController.js.map