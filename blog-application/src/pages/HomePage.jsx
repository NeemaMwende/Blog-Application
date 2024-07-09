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
  }, []);

  return (
    <div>
      <h1>Blog Website</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
