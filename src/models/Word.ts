import { Schema, model } from "mongoose";

const wordSchema = new Schema({
  word: { type: String, unique: true },
  meaning: { type: String, unique: true },
});

export default wordSchema;
