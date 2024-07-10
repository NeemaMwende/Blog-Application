import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import "../pages/PostView.css";

const PostView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await api.getPost(id);
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

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
