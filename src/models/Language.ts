import { Schema } from "mongoose";
import Word from "./Word";

const languageSchema = new Schema({
  name: String,
  shortName: String,
  words: [Word],
});

export default languageSchema;
