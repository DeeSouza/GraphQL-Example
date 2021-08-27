import mongoose from "mongoose";

const UserJobSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  company: String,
});

export default mongoose.model("UserJob", UserJobSchema);
