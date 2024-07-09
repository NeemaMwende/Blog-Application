import { useState } from "react"
import api from "../services/api"

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await api.createPost({title, content});
      localStorage.setItem('token',data.token);
      console.log(data);

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

            <div>
              <label htmlFor="">Title</label>
              <input type='email' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
              
              <div>
                <label htmlFor="">Content</label>
                <input type='password' value={content} onChange={(e) => setContent(e.target.value)} />
              </div>

              <button type='submit'> Create Post</button>

      </form>
    </div>
  )
}

export default CreatePostPage
