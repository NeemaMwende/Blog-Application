import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [posts, getPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await api.getPosts();
        console.log(data);
        getPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  },[]);

  const handleView = (postId) => {
    navigate(`/posts/${postId}`);
  };

  const handleDelete = async (postId) => {
    try {
      await api.deletePost(postId);
      getPosts(posts.filter(post => post._id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }

  return (
    <div className='home'>
      <h1>Blog Website</h1>
      <div className='homediv'>
      <ul className='blogpost'>
        {posts.map((post) => (
          <li key={post._id} className='blogpoststyle'>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>by : {post.author.username}</small>
            <small>email : {post.author.email}</small>
            <div className='btn'>
              <button onClick={()=> handleView(post._id)}>View</button>
              <button onClick={()=> handleDelete(post._id)}>Delete</button>
            </div>
            
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
};

export default HomePage;
