import axios from "axios";

const API_URL = 'http://localhost:5000/api';

const register = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
}