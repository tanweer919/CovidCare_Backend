"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const LocationController_1 = __importDefault(require("./controller/LocationController"));
const ResourceController_1 = __importDefault(require("./controller/ResourceController"));
const router = express_1.default.Router();
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.post("/autocomplete", LocationController_1.default.autoComplete);
router.post("/available/add", ResourceController_1.default.createAvailableResource);
router.post("/request/add", ResourceController_1.default.createResourceRequest);
router.options("*", cors_1.default());
exports.default = router;
//# sourceMappingURL=routes.js.map