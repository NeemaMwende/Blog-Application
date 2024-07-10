// import axios from "axios";

// const API_URL = 'http://localhost:5000/api';

// const register = async (userData) => {
//     const response = await axios.post(`${API_URL}/auth/register`, userData);
//     return response.data;
// }

// const login = async (userData) => {
//     const response = await axios.post(`${API_URL}/auth/login`, userData);
//     return response.data;
// }

// const createPost = async (postData,token) => {
//     const config = {
//         headers:{
//             'Authorization':`Bearer ${token}`,
//         }
//     };
//     const response = await axios.post(`${API_URL}/posts`,postData,config);
//     return response.data;
// }


// const getPosts = async (userData) => {
//     const response = await axios.get(`${API_URL}/posts`, userData);
//     return response.data;
// }

// const deletePost = async (postId, token) => {
//     const config = {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         }
//       };
//     const response = await axios.delete(`${API_URL}/posts/${postId}`, config);
//     return response.data;
// }

// const viewPost = async (postId) => {
//     const response = await axios.get(`${API_URL}/posts/${postId}`);
//     return response.data;
//   }

// export default { register, login, getPosts, createPost, deletePost, viewPost };
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = {
  getPosts: async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  },
  getPost: async (postId) => {
    const response = await axios.get(`${API_URL}/posts/${postId}`);
    return response.data;
  },
  createPost: async (postData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API_URL}/posts`, postData, config);
    return response.data;
  },
  deletePost: async (postId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(`${API_URL}/posts/${postId}`, config);
    return response.data;
  },

  register: async (userData) => {
    const response = await axios.post(`${API_URL}/api/auth/register`, userData);
    return response.data;
},

    login :async (userData) => {
    const response = await axios.post(`${API_URL}/api/auth/login`, userData);
    return response.data;
}
};

export default api;
