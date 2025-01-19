import axios from "axios";

// const BASE_URL = "http://localhost:5002/api/users";
const BASE_URL = "https://backend-crm-production.up.railway.app/api/users";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const addUser = async (user) => {

  try {
    const response = await axios.post(BASE_URL, user)
    return response.data
  } catch (error) {
    console.error("error add user:", error)
  }
}

export const deletUser = async (id) => {
  try {

    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response;
  } catch (error) {
    console.error("خطا در حذف کاربر:", error);
    throw error;
  }
};

