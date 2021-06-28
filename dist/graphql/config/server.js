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
const AvailableResource_1 = __importDefault(require("../resolvers/AvailableResource"));
const ResourceRequestResolver_1 = __importDefault(require("../resolvers/ResourceRequestResolver"));
const type_graphql_1 = require("type-graphql");
const graphql_yoga_1 = require("graphql-yoga");
class GraphQL {
    setupServer() {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = yield type_graphql_1.buildSchema({
                resolvers: [AvailableResource_1.default, ResourceRequestResolver_1.default],
                emitSchemaFile: true,
                validate: false,
            });
            const graphQLserver = new graphql_yoga_1.GraphQLServer({ schema });
        });
    }
}
//# sourceMappingURL=server.js.map