import express from "express";
import Post from "../models/Post.js";
import auth from '../middleware/auth.js';
import mongoose from "mongoose";

const router = express.Router();

// Create post
router.post('/', auth, async (req, res) => {
  const { title, content } = req.body;

  try {
    const newPost = new Post({
      title,
      content,
      author: req.user.id
    });

    const post = await newPost.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author', ['username', 'email']);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get post by ID
router.get('/:id', async (req, res) => {
  try {
      const postId = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(postId)) {
          return res.status(400).json({ message: 'Invalid post ID' });
      }
      const post = await Post.findById(postId).populate('author', ['username', 'email']);
      if (!post) {
          return res.status(404).json({ message: 'Post not found' });
      }
      res.status(200).json(post);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Delete post by ID
router.delete('/:id', auth, async (req, res) => {
  try {
      const postId = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(postId)) {
          return res.status(400).json({ message: 'Invalid post ID' });
      }
      const post = await Post.findById(postId);
      if (!post) {
          return res.status(404).json({ message: 'Post not found' });
      }
      if (post.author.toString() !== req.user.id) {
          return res.status(401).json({ message: 'Unauthorized' });
      }
      await post.remove();
      res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

export default router;
