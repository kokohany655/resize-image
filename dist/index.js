"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageProcess_1 = __importDefault(require("./routes/imageProcess"));
const app = (0, express_1.default)();
const port = 8000;
app.use('/api/image', imageProcess_1.default);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
exports.default = app;
