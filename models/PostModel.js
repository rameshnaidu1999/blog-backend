import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  postImage: String,
});

export default mongoose.model("Posts", postSchema);
