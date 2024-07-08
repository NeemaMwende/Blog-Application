import express from "express";
import Post from "../models/Post";

const router = express.Router();

//create posts
router.post('/', async(req, res) => {
    const { title, content } = req.body;

    try{
        const newPost = new Post({
            title,
            content,
            author: req.user.id
        })
        
    }catch(err){
        res.status(500).json({message: err.message});
    }
})