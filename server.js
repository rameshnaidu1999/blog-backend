import express from "express";
import Cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Posts from "./models/PostModel.js";

// app and config
const app = express();
const DB_URL =
  "mongodb+srv://ramesh1999kas:ramesh@cluster0.ycjuo.mongodb.net/social-blog?retryWrites=true&w=majority";

// middleware
app.use(Cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB config
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("err", err);
  });

// API Endpoint
app.get("/", (req, res) => {
  res.status(200).send("Hello Ramesh gaaru !!!");
});

app.post("/all/posts", (req, res) => {
  const postCard = req.body;
  Posts.create(postCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/all/posts", (req, res) => {
  Posts.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

const PORT = 5000;

// server running
app.listen(PORT, () => {
  console.log("server running on port", +PORT);
});
