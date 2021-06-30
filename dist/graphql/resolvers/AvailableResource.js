"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const type_graphql_1 = require("type-graphql");
const AvailableResource_1 = __importStar(require("../schema/AvailableResource"));
const AvailableResource_2 = __importDefault(require("../../models/AvailableResource"));
let AvailableResourceResolver = class AvailableResourceResolver {
    availableResources(lat, long) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let availableResources;
                if (lat && long) {
                    availableResources = yield AvailableResource_2.default.find({
                        verified: 1,
                        location: {
                            $near: { $geometry: { type: "Point", coordinates: [+lat, +long] } },
                        },
                    });
                }
                else {
                    availableResources = yield AvailableResource_2.default.find({
                        verified: 1,
                    }).sort({ _id: -1 });
                }
                return availableResources.map((resource) => (Object.assign({ id: resource.id }, resource.toObject())));
            }
            catch (e) {
                throw new Error("Some error occured");
            }
        });
    }
    createAvailableResource(newResourceData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const availableResource = new AvailableResource_2.default();
                availableResource.name = newResourceData["name"];
                availableResource.type = newResourceData["type"];
                availableResource.description = newResourceData["description"];
                availableResource.contactName = newResourceData["contactName"];
                availableResource.phoneNumber = newResourceData["phoneNumber"];
                availableResource.city = newResourceData["city"];
                availableResource.address = newResourceData["address"];
                availableResource.available = newResourceData["available"];
                availableResource.source = newResourceData["source"];
                availableResource.like = 0;
                availableResource.verified = 0;
                availableResource.location = {
                    type: "Point",
                    coordinates: newResourceData["location"],
                };
                const newResource = yield availableResource.save();
                return Object.assign({ id: newResource.id }, newResource.toObject());
            }
            catch (e) {
                console.log(e);
                throw new Error("Some error occured");
            }
        });
    }
};
__decorate([
    type_graphql_1.Query((returns) => AvailableResource_1.default),
    __param(0, type_graphql_1.Arg("lat", { nullable: true })),
    __param(1, type_graphql_1.Arg("long", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AvailableResourceResolver.prototype, "availableResources", null);
__decorate([
    type_graphql_1.Mutation((returns) => AvailableResource_1.default),
    __param(0, type_graphql_1.Arg("newResourceData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AvailableResource_1.NewAvailableResourceInput]),
    __metadata("design:returntype", Promise)
], AvailableResourceResolver.prototype, "createAvailableResource", null);
AvailableResourceResolver = __decorate([
    type_graphql_1.Resolver((of) => AvailableResource_1.default)
], AvailableResourceResolver);
exports.default = AvailableResourceResolver;
//# sourceMappingURL=AvailableResource.js.map