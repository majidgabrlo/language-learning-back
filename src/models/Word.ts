import { Schema } from "mongoose";

const wordSchema = new Schema({
  languageShortName:String,
  word: String,
  meaning: String,
});

export default wordSchema;
