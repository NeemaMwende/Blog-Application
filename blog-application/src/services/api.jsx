import axios from "axios";

const API_URL = 'http://localhost:5000/api';

const register = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
}

const login = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/list`, userData);
    return response.data;
}


const createPost = async (postData, token) => {
    const config = {
        headers: {
            'x-auth-token':token
        }
    }
    const response = await axios.post(`${API_URL}/auth/posts`, postData,config);
    return response.data;
}


const getPost = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/posts`, userData);
    return response.data;
}

export default { register, login, getPost, createPost };