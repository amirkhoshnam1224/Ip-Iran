import API from "./api";

export const fetchUsersServise = async () => {
  try {
    const response = await API.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const addUserServise = async (user) => {
  try {
    const response = await API.post("/users",user)
    return response.data
  } catch (error) {
    console.error("error add user:", error)
  }
}

export const deletUserServise = async (id) => {
  try {
    const response = await API.delete(`users/${id}`);
    return response;
  } catch (error) {
    console.error("خطا در حذف کاربر:", error);
    throw error;
  }
};

export const updateUserService = async (id, updateUserData) => {
  try {
    const response = await API.put(`/users/${id}`, updateUserData);
    return response.data;
  } catch (error) {
    console.error("خطا در بروزرسانی کاربر:", error);
    throw error;
  }
};
