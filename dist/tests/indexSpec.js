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
const resizeImage_1 = require("./../utilities/resizeImage");
const fs_1 = __importDefault(require("fs"));
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(index_1.default);
describe('1- testing endpoint', () => {
    it('1.should return a 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/image?width=100&height=100&filename=coffee');
        expect(response.status).toBe(200);
    }));
});
describe('2- image not found', () => {
    it('1.should return a 404 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/image?width=100&height=100&filename=coe');
        expect(response.status).toBe(404);
    }));
    it('2.filename not found', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/image?width=100&height=100');
        expect(response.status).toBe(400);
    }));
});
describe('3- check resizeImage', () => {
    it('1. should return upload image', () => __awaiter(void 0, void 0, void 0, function* () {
        const resizeImag = yield (0, resizeImage_1.resizeImage)('coffee', 500, 500);
        expect(fs_1.default.existsSync(resizeImag)).toBe(true);
    }));
});
