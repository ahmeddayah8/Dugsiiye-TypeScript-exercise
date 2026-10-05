import { PostModel, Post } from "../models/post.model";

// Input shape (without `createdAt`, `_id`)
export type CreatePostInput = Omit<Post, "createdAt" | "_id">;

// Create a post
export async function createPost(data: CreatePostInput): Promise<Post> {
  const post = new PostModel(data);
  return await post.save(); // ✅ Returns a Promise<Post>
}

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  return await PostModel.find();
}