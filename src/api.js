import axios from "axios";
const API_BASE_URL = "http://127.0.0.1:5000";  // Flask API URL

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || "Login failed" };
    }
};

export const signupUser = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, { username, email, password });
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || "Signup failed" };
    }
};