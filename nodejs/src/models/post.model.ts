import mongoose, { Schema, Document } from "mongoose";

// 1. Define the Post interface
export interface Post extends Document {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

// 2. Create the Mongoose schema
const postSchema = new Schema<Post>({
  title: { type: String, required: true },
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
});

// 3. Export the model
export const PostModel = mongoose.model<Post>("Post", postSchema);
