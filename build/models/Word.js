"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var wordSchema = new mongoose_1.Schema({
    languageShortName: String,
    word: String,
    meaning: String,
});
exports.default = wordSchema;
