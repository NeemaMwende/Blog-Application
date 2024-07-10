import axios from "axios";

const API_URL = 'http://localhost:5000/api';

const register = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
}

const login = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
}


const createPost = async (postData,token) => {
    const config = {
        headers:{
            'Authorization':`Bearer ${token}`,
        }
    };
    const response = await axios.post(`${API_URL}/posts`,postData,config);
    return response.data;
}


const getPosts = async (userData) => {
    const response = await axios.get(`${API_URL}/posts`, userData);
    return response.data;
}

const deletePost = async (userData) => {
    const response = await axios.delete(`${API_URL}/posts`, userData);
    return response.data;
}

export default { register, login, getPosts, createPost };