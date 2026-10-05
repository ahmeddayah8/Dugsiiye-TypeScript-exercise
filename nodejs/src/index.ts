import express from "express";
import mongoose from "mongoose";
import postRoutes from "./routes/post.routes";
import helloRoutes from "./routes/hello.routes";
import userRoutes from "./routes/user.routes";


const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/api", postRoutes);
app.use("/hello", helloRoutes);

mongoose
  .connect("mongodb://localhost:27017/myapp")
  .then(() => {
    app.listen(5000, () => console.log("✅ Server is running on port 5000"));
  })
  .catch((err) => console.error("MongoDB connection error:", err));


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
