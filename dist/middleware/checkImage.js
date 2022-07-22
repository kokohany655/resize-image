"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkImage = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function checkImage(req, res, next) {
    const { width, height, filename } = req.query;
    if (!filename)
        return res.status(400).send('filename is required');
    if (width || height <= 0)
        return res.status(400).send('width and height must be greater than 0');
    if (isNaN(Number(width)) || isNaN(Number(height)))
        return res.status(400).send('width and height is required must be a number');
    const uploadImage = path_1.default.join(__dirname, '../../full', filename + '.jpg');
    if (uploadImage.indexOf('.jpg') === -1)
        return res.status(400).send('file must be a jpg');
    if (!fs_1.default.existsSync(uploadImage))
        return res.status(404).send('Not found');
    const outputImage = path_1.default.join(__dirname, '../../thumb', filename + '_' + width + '_' + height + '.jpg');
    if (fs_1.default.existsSync(outputImage))
        return res.sendFile(outputImage);
    next();
}
exports.checkImage = checkImage;
