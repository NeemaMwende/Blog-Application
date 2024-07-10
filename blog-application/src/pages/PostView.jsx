import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import "../pages/PostView.css";

const PostView = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await api.getPost(postId);
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='post-view'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <small>by : {post.author.username}</small>
      <small>email : {post.author.email}</small>
    </div>
  );
};

export default PostView;
