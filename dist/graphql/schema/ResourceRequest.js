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
exports.NewResourceRequestInput = void 0;
const type_graphql_1 = require("type-graphql");
const Location_1 = __importDefault(require("./Location"));
let ResourceRequestSchema = class ResourceRequestSchema {
};
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.ID),
    __metadata("design:type", String)
], ResourceRequestSchema.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ResourceRequestSchema.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], ResourceRequestSchema.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ResourceRequestSchema.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field((type) => Location_1.default),
    __metadata("design:type", Location_1.default)
], ResourceRequestSchema.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ResourceRequestSchema.prototype, "city", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ResourceRequestSchema.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ResourceRequestSchema.prototype, "contactName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ResourceRequestSchema.prototype, "phoneNumber", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ResourceRequestSchema.prototype, "quantity", void 0);
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], ResourceRequestSchema.prototype, "like", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], ResourceRequestSchema.prototype, "created", void 0);
ResourceRequestSchema = __decorate([
    type_graphql_1.ObjectType()
], ResourceRequestSchema);
let NewResourceRequestInput = class NewResourceRequestInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NewResourceRequestInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], NewResourceRequestInput.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], NewResourceRequestInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field((type) => [type_graphql_1.Float]),
    __metadata("design:type", Array)
], NewResourceRequestInput.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NewResourceRequestInput.prototype, "city", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NewResourceRequestInput.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NewResourceRequestInput.prototype, "contactName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NewResourceRequestInput.prototype, "phoneNumber", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NewResourceRequestInput.prototype, "quantity", void 0);
NewResourceRequestInput = __decorate([
    type_graphql_1.InputType()
], NewResourceRequestInput);
exports.NewResourceRequestInput = NewResourceRequestInput;
exports.default = ResourceRequestSchema;
//# sourceMappingURL=ResourceRequest.js.map