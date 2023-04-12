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
exports.Mutation = void 0;
var validator_1 = __importDefault(require("validator"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var User_1 = __importDefault(require("../../models/User"));
var key_1 = require("../../key");
exports.Mutation = {
    signup: function (_, _a) {
        var credentials = _a.credentials, name = _a.name;
        return __awaiter(void 0, void 0, void 0, function () {
            var email, password, isEmail, isValidPassword, hashedPassword, createNewUser, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        email = credentials.email, password = credentials.password;
                        isEmail = validator_1.default.isEmail(email);
                        if (!isEmail) {
                            return [2, {
                                    userErrors: [
                                        {
                                            message: "Invalid email",
                                        },
                                    ],
                                    token: null,
                                }];
                        }
                        isValidPassword = validator_1.default.isLength(password, {
                            min: 5,
                        });
                        if (!isValidPassword) {
                            return [2, {
                                    userErrors: [
                                        {
                                            message: "Invalid password",
                                        },
                                    ],
                                    token: null,
                                }];
                        }
                        if (!name) {
                            return [2, {
                                    userErrors: [
                                        {
                                            message: "Invalid name",
                                        },
                                    ],
                                    token: null,
                                }];
                        }
                        return [4, bcryptjs_1.default.hash(password, 10)];
                    case 1:
                        hashedPassword = _b.sent();
                        createNewUser = new User_1.default({
                            name: name,
                            email: credentials.email,
                            password: hashedPassword,
                        });
                        return [4, createNewUser.save()];
                    case 2:
                        res = _b.sent();
                        return [2, {
                                userErrors: [],
                                token: jsonwebtoken_1.default.sign({
                                    userId: res._id,
                                }, key_1.JSON_SIGNATURE, {
                                    expiresIn: 3600000,
                                }),
                            }];
                }
            });
        });
    },
    signin: function (_, _a) {
        var credentials = _a.credentials;
        return __awaiter(void 0, void 0, void 0, function () {
            var email, password, user, isMatch;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        email = credentials.email, password = credentials.password;
                        return [4, User_1.default.findOne({ email: email })];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            return [2, {
                                    userErrors: [{ message: "Invalid credentials" }],
                                    token: null,
                                }];
                        }
                        return [4, bcryptjs_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password)];
                    case 2:
                        isMatch = _b.sent();
                        if (!isMatch) {
                            return [2, {
                                    userErrors: [{ message: "Invalid credentials" }],
                                    token: null,
                                }];
                        }
                        return [2, {
                                userErrors: [],
                                token: jsonwebtoken_1.default.sign({ userId: user.id }, key_1.JSON_SIGNATURE, {
                                    expiresIn: 3600000,
                                }),
                            }];
                }
            });
        });
    },
    addLanguage: function (_, _a, _b) {
        var languageShortName = _a.languageShortName, name = _a.name;
        var userInfo = _b.userInfo;
        return __awaiter(void 0, void 0, void 0, function () {
            var user;
            var _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4, User_1.default.findById(userInfo === null || userInfo === void 0 ? void 0 : userInfo.userId)];
                    case 1:
                        user = _e.sent();
                        if (!user)
                            return [2, "not authenticated"];
                        if ((_d = (_c = user === null || user === void 0 ? void 0 : user.languages) === null || _c === void 0 ? void 0 : _c.find(function (lang) {
                            return (lang === null || lang === void 0 ? void 0 : lang.shortName) === languageShortName;
                        })) === null || _d === void 0 ? void 0 : _d.id) {
                            return [2, "Language Already Exist"];
                        }
                        return [4, User_1.default.findByIdAndUpdate(userInfo === null || userInfo === void 0 ? void 0 : userInfo.userId, {
                                $push: { languages: { name: name, shortName: languageShortName } },
                            })];
                    case 2:
                        _e.sent();
                        return [2, "Done"];
                }
            });
        });
    },
    removeLanguage: function (_, _a, _b) {
        var languageShortName = _a.languageShortName;
        var userInfo = _b.userInfo;
        return __awaiter(void 0, void 0, void 0, function () {
            var user, filtered;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, User_1.default.findById(userInfo === null || userInfo === void 0 ? void 0 : userInfo.userId)];
                    case 1:
                        user = _c.sent();
                        if (!user)
                            return [2, "Not Authenticated"];
                        if (!(user === null || user === void 0 ? void 0 : user.languages)) {
                            return [2, "You Don't have any languages"];
                        }
                        filtered = user === null || user === void 0 ? void 0 : user.languages.filter(function (lang) { return lang.shortName !== languageShortName; });
                        return [4, User_1.default.findByIdAndUpdate(userInfo === null || userInfo === void 0 ? void 0 : userInfo.userId, { languages: filtered })];
                    case 2:
                        _c.sent();
                        return [2, "Done"];
                }
            });
        });
    },
    addWord: function (_, _a, _b) {
        var languageShortName = _a.languageShortName, word = _a.word, meaning = _a.meaning;
        var userInfo = _b.userInfo;
        return __awaiter(void 0, void 0, void 0, function () {
            var user;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, User_1.default.findById(userInfo === null || userInfo === void 0 ? void 0 : userInfo.userId)];
                    case 1:
                        user = _c.sent();
                        if (!user)
                            return [2, "Not Authenticated"];
                        return [2, (user === null || user === void 0 ? void 0 : user.languages.map(function (lang) { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (lang.shortName !== languageShortName)
                                                return [2, false];
                                            lang.words.push({ word: word, meaning: meaning, languageShortName: languageShortName });
                                            return [4, user.save()];
                                        case 1:
                                            _a.sent();
                                            return [2, true];
                                    }
                                });
                            }); }).length)
                                ? "Done"
                                : "Error"];
                }
            });
        });
    },
    removeWord: function (_, _a, _b) {
        var languageShortName = _a.languageShortName, word = _a.word;
        var userInfo = _b.userInfo;
        return __awaiter(void 0, void 0, void 0, function () {
            var user;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, User_1.default.findById(userInfo === null || userInfo === void 0 ? void 0 : userInfo.userId)];
                    case 1:
                        user = _c.sent();
                        if (!user)
                            return [2, "Not Authenticated"];
                        user === null || user === void 0 ? void 0 : user.languages.map(function (lang) {
                            if (lang.shortName === languageShortName) {
                                var words = lang.words.filter(function (item) { return item.word !== word; });
                                lang.words = words;
                            }
                        });
                        return [4, (user === null || user === void 0 ? void 0 : user.save())];
                    case 2:
                        _c.sent();
                        return [2, "Done"];
                }
            });
        });
    },
};
