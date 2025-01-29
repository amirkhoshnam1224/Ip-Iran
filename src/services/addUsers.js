import axios from "axios";

// تنظیمات پایه Axios
const API = axios.create({
  baseURL: "/api", // آدرس اصلی API را وارد کنید
  withCredentials: true, // برای ارسال کوکی‌ها
});



// متد افزودن کاربر جدید
export const addUserToInbound = async (inboundId, userData) => {
  try {
    const payload = {
      id: inboundId,
      settings: JSON.stringify({
        clients: [
          {
            email: userData.email,
            expiryTime: new Date(userData.expiryTime).getTime(),
            remark: userData.remark,
            enable: userData.enable,
            id: crypto.randomUUID(),
            limitIp: 0,
            totalGB: 0,
            reset: 0,
            subId: crypto.randomUUID(),
          },
        ],
      }),
    };

    const response = await API.post("kEMAWd96sDagXdB/panel/api/inbounds/addClient", payload);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Add user error:", error.response?.data || error.message);
    throw error;
  }
};

export default API;



export const getClientTrafficsByEmail = async (email) => {
    try {
        const response = await API.get(`kEMAWd96sDagXdB/panel/api/inbounds/getClientTraffics/${email}`);
        console.log("Response for Client Traffics with email:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching Client Traffics with email:", error.response?.data || error.message);
        throw error;
    }
};

export const getClientTrafficsById = async (clientId) => {
  try {
      const response = await API.get(`kEMAWd96sDagXdB/panel/api/inbounds/getClientTrafficsById/${clientId}`);
      console.log("Response for Client Traffics with ID:", response.data);
      return response.data;
  } catch (error) {
      console.error("Error fetching Client Traffics with ID:", error.response?.data || error.message);
      throw error;
  }
};
