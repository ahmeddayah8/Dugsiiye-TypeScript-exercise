import { Request, Response } from "express";
import { createPost, getAllPosts, CreatePostInput } from "../services/post.service";

// POST /api/posts
export async function handleCreatePost(
  req: Request<{}, {}, CreatePostInput>,
  res: Response
) {
  try {
    const post = await createPost(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: "Failed to create post" });
  }
}

// GET /api/posts
export async function handleGetAllPosts(_req: Request, res: Response) {
  const posts = await getAllPosts();
  res.json(posts);
}