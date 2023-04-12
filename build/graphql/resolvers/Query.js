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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
var User_1 = __importDefault(require("../../models/User"));
exports.Query = {
    me: function (_, __, _a) {
        var userInfo = _a.userInfo;
        return __awaiter(void 0, void 0, void 0, function () {
            var user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!userInfo)
                            return [2, null];
                        return [4, User_1.default.findById(userInfo === null || userInfo === void 0 ? void 0 : userInfo.userId)];
                    case 1:
                        user = _b.sent();
                        return [2, user];
                }
            });
        });
    },
    languagesList: function () {
        return [
            {
                name: "French",
                shortName: "fr",
                flagUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
            },
            {
                name: "Italian",
                shortName: "it",
                flagUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png",
            },
            {
                name: "German",
                shortName: "de",
                flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Flag_of_Germany_%283-2_aspect_ratio%29.svg/220px-Flag_of_Germany_%283-2_aspect_ratio%29.svg.png",
            },
            {
                name: "Spanish",
                shortName: "es",
                flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png",
            },
            {
                name: "Portuguese",
                shortName: "pt",
                flagUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
            },
        ];
    },
    wordsList: function (_, _a, _b) {
        var languageShortName = _a.languageShortName;
        var userInfo = _b.userInfo;
        return __awaiter(void 0, void 0, void 0, function () {
            var user, words;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4, User_1.default.findById(userInfo === null || userInfo === void 0 ? void 0 : userInfo.userId)];
                    case 1:
                        user = _d.sent();
                        words = (_c = user === null || user === void 0 ? void 0 : user.languages.find(function (lang) { return lang.shortName === languageShortName; })) === null || _c === void 0 ? void 0 : _c.words;
                        return [2, words];
                }
            });
        });
    },
    languageList: function (_, __, _a) {
        var userInfo = _a.userInfo;
        return __awaiter(void 0, void 0, void 0, function () {
            var user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, User_1.default.findById(userInfo === null || userInfo === void 0 ? void 0 : userInfo.userId)];
                    case 1:
                        user = _b.sent();
                        return [2, user === null || user === void 0 ? void 0 : user.languages];
                }
            });
        });
    },
    savedWordsInText: function (_, _a, _b) {
        var languageShortName = _a.languageShortName, text = _a.text;
        var userInfo = _b.userInfo;
        return __awaiter(void 0, void 0, void 0, function () {
            var user, words;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4, User_1.default.findById(userInfo === null || userInfo === void 0 ? void 0 : userInfo.userId)];
                    case 1:
                        user = _d.sent();
                        words = (_c = user === null || user === void 0 ? void 0 : user.languages.find(function (lang) { return lang.shortName === languageShortName; })) === null || _c === void 0 ? void 0 : _c.words.map(function (word) { return word.word; });
                        return [2, text
                                .split(" ")
                                .filter(function (word) {
                                return words === null || words === void 0 ? void 0 : words.includes(word.replaceAll(/[,.:]/g, ""));
                            })
                                .filter(function (word, i, self) { return self.indexOf(word) === i; }).map(function (word) { return word.replaceAll(/[,.:]/g, ""); })];
                }
            });
        });
    },
};
