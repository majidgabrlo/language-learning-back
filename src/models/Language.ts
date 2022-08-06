import { Schema, model } from "mongoose";
import Word from "./Word";

const languageSchema = new Schema({
  name: { type: String, unique: true },
  shortName: { type: String, unique: true },
  words: [Word],
});

export default languageSchema;
