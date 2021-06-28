"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewResourceInput = void 0;
const type_graphql_1 = require("type-graphql");
const Location_1 = __importDefault(require("./Location"));
let AvailableResourceSchema = class AvailableResourceSchema {
};
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.ID),
    __metadata("design:type", String)
], AvailableResourceSchema.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AvailableResourceSchema.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], AvailableResourceSchema.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AvailableResourceSchema.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AvailableResourceSchema.prototype, "contactName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AvailableResourceSchema.prototype, "phoneNumber", void 0);
__decorate([
    type_graphql_1.Field((type) => Location_1.default),
    __metadata("design:type", Location_1.default)
], AvailableResourceSchema.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AvailableResourceSchema.prototype, "city", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AvailableResourceSchema.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], AvailableResourceSchema.prototype, "available", void 0);
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], AvailableResourceSchema.prototype, "verified", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AvailableResourceSchema.prototype, "source", void 0);
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], AvailableResourceSchema.prototype, "like", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], AvailableResourceSchema.prototype, "created", void 0);
AvailableResourceSchema = __decorate([
    type_graphql_1.ObjectType()
], AvailableResourceSchema);
let NewResourceInput = class NewResourceInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NewResourceInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], NewResourceInput.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], NewResourceInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NewResourceInput.prototype, "contactName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NewResourceInput.prototype, "phoneNumber", void 0);
__decorate([
    type_graphql_1.Field((type) => [type_graphql_1.Float]),
    __metadata("design:type", Array)
], NewResourceInput.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NewResourceInput.prototype, "city", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NewResourceInput.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], NewResourceInput.prototype, "available", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NewResourceInput.prototype, "source", void 0);
NewResourceInput = __decorate([
    type_graphql_1.InputType()
], NewResourceInput);
exports.NewResourceInput = NewResourceInput;
exports.default = AvailableResourceSchema;
//# sourceMappingURL=AvailableResource.js.map