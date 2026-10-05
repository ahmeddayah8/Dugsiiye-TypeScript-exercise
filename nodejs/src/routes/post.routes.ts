import { Router } from "express";
import { handleCreatePost, handleGetAllPosts } from "../controllers/post.controller";

const router = Router();

router.post("/posts", handleCreatePost);
router.get("/posts", handleGetAllPosts);

export default router;
