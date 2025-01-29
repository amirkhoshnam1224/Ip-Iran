// services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "/api", // به‌جای آدرس کامل، /api را استفاده کنید
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginToPanel = async (username, password) => {
  try {
    const response = await API.post("/kEMAWd96sDagXdB/login", {
      username,
      password,
    });

    console.log("Login response:", response);
    return response.data; // پاسخ سرور
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    if (error.response) {
      console.error("Error Status:", error.response.status);
      console.error("Error Data:", error.response.data);
    }
    throw error;
  }
};

export default API;
