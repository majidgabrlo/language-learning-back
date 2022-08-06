import { Schema, model } from "mongoose";
import Language from "./Language";

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  languages: [Language],
});

export default model("User", userSchema);
