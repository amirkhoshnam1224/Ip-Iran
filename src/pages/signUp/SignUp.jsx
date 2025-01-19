import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUpUser } from "../../services/signupServices";

function SignUp() {
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const response = await signUpUser({ formData });
            if (response.status === 201) {
                toast.success("شما با موفقیت ثبت‌نام کردید", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setIsLoading(false)
            } else {
                toast.error("خطا در ثبت‌نام. لطفاً دوباره تلاش کنید.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            console.error("Error during signup:", error);
            toast.error("خطا در ثبت‌نام. مشکلی پیش آمده است.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            <ToastContainer></ToastContainer>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
            >
                <h1 className="text-2xl font-bold text-center text-gray-800">ثبت‌نام</h1>
                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">نام:</label>
                    <input
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="نام"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">نام خانوادگی:</label>
                    <input
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="نام خانوادگی"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">ایمیل:</label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ایمیل"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">رمز عبور:</label>
                    <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="رمز عبور"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ${isLoading && "opacity-50 cursor-not-allowed"
                        }`}
                >
                    {isLoading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
                </button>
            </form>
        </>
    );
}

export default SignUp;
