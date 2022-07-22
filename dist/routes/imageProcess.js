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
const express_1 = __importDefault(require("express"));
const checkImage_1 = require("../middleware/checkImage");
const resizeImage_1 = require("../utilities/resizeImage");
const imageProcess = express_1.default.Router();
imageProcess.get('/', checkImage_1.checkImage, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { width, height, filename } = req.query;
    const result = yield (0, resizeImage_1.resizeImage)(filename, width, height);
    res.sendFile(result);
}));
exports.default = imageProcess;
