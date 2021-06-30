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
require("dotenv").config();
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const AvailableResource_1 = __importDefault(require("./graphql/resolvers/AvailableResource"));
const ResourceRequestResolver_1 = __importDefault(require("./graphql/resolvers/ResourceRequestResolver"));
const type_graphql_1 = require("type-graphql");
const Database_1 = require("./config/Database");
const apollo_server_express_1 = require("apollo-server-express");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [AvailableResource_1.default, ResourceRequestResolver_1.default],
        emitSchemaFile: true,
        validate: false,
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({ schema });
    const app = express_1.default();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(cors_1.default({
        origin: "*",
        credentials: true,
        methods: "OPTIONS, GET, HEAD, PUT, PATCH, POST, DELETE",
        allowedHeaders: ["Content-Type", "Depth", "User-Agent", "Cache-Control"],
    }));
    //ConnectToDatabase
    Database_1.connectToDatabase();
    apolloServer.applyMiddleware({ app, cors: false });
    //Sever
    // app.use("/api", router);
    app.listen(process.env.PORT || 8080, () => {
        console.log("Server started");
    });
});
main().catch((err) => console.log(err));
//# sourceMappingURL=index.js.map