import axios from "axios";


export const signUpUser = async ({ formData }) => {

    const BASE_URL = "http://localhost:5002/api/auth/signup";
    try {
        const response = await axios.post(BASE_URL, formData);
        console.log("resault", response);
        return response;
    } catch (error) {
        console.error("Signup error:", error);
        throw error; 
    }
};
