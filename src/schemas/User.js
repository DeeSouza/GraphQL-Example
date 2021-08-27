import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

export default mongoose.model("User", UserSchema);
