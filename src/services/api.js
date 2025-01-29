import axios from "axios";
const BASE_URL = "https://backend-crm-production.up.railway.app/api";
// const BASE_URL = "http://localhost:5002/api";
// تنظیمات عمومی Axios
const API = axios.create({
    baseURL: BASE_URL, // آدرس اصلی API
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;
