import mongoose from "mongoose";

const GameCommentSchema = new mongoose.Schema({
  username: String,
  comment: String,
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game",
  },
});

export default mongoose.model("GameComment", GameCommentSchema);
