import API from "./api"; 


export const signUpUser = async ({ formData }) => {
    

    try {
        const response = await API.post("/auth/signup", formData);
        console.log("resault", response);
        return response;
    } catch (error) {
        console.error("Signup error:", error);
        throw error;
    }
};


