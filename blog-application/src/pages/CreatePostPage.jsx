import { useState } from 'react';
import api from '../services/api';
import "../pages/create.css";
// import "../services/CreatePostPage.css";

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      console.log('No token found');
      return;
    }

    try {
      const data = await api.createPost({title, content}, token);
      // localStorage.setItem('token',data.token);
      console.log(data);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
