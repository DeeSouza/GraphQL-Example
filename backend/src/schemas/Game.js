import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  platform: String,
  cover: String,
});

export default mongoose.model("Game", GameSchema);
