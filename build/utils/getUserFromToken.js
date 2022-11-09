"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserFromToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var key_1 = require("../key");
var getUserFromToken = function (token) {
    try {
        return jsonwebtoken_1.default.verify(token, key_1.JSON_SIGNATURE);
    }
    catch (error) {
        return null;
    }
};
exports.getUserFromToken = getUserFromToken;
