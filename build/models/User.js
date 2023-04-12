"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Language_1 = __importDefault(require("./Language"));
var userSchema = new mongoose_1.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    languages: [Language_1.default],
});
exports.default = (0, mongoose_1.model)("User", userSchema);
