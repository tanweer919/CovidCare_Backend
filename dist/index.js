"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const Database_1 = require("./config/Database");
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
//Routes
app.use("/api", routes_1.default);
app.listen(8080, () => {
    console.log("Server started");
});
//# sourceMappingURL=index.js.map