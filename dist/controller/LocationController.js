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
const axios_1 = __importDefault(require("axios"));
class LocationController {
    autoComplete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const input = req.body["input"];
            const autoCompleteUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?components=country:in&key=${process.env.MAP_API_KEY}&input=${input}`;
            try {
                const { data } = yield axios_1.default.get(autoCompleteUrl);
                const { predictions } = data;
                let result = predictions.map((prediction) => {
                    var _a;
                    return {
                        term: (_a = prediction === null || prediction === void 0 ? void 0 : prediction.structured_formatting) === null || _a === void 0 ? void 0 : _a.main_text,
                        placeId: prediction === null || prediction === void 0 ? void 0 : prediction.place_id,
                    };
                });
                result = result.filter((prediction) => prediction !== null);
                res.status(200).send(result);
            }
            catch (e) {
                console.log(e);
                res.status(400).send({ message: "Some error occured" });
            }
        });
    }
}
exports.default = new LocationController();
//# sourceMappingURL=LocationController.js.map