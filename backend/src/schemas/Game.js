import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  price: Number,
  forSale: Boolean,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GameComment",
    },
  ],
});

export default mongoose.model("Game", GameSchema);
