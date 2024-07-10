import React, { useEffect, useState } from 'react';
import api from '../services/api';

const HomePage = () => {
  const [posts, getPosts] = useState([]);

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

  return (
    <div>
      <h1>Blog Website</h1>
      <div className='home'>
      <ul className='blogpost'>
        {posts.map((post) => (
          <li key={post._id} className='blogpoststyle'>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>by : {post.author.username}</small>
            <small>email : {post.author.email}</small>
            <div className='btn'>
              <button>View</button>
              <button>Delete</button>
            </div>
            
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
};

export default HomePage;
