import { Link } from "react-router-dom";

function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    // اینجا می‌توانید منطق لاگین را اضافه کنید
    console.log("Logging in...");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">ورود به حساب کاربری</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="ایمیل خود را وارد کنید"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              رمز عبور
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="رمز عبور خود را وارد کنید"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            ورود
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          حساب کاربری ندارید؟
          <Link to="/signup" className="text-blue-500 hover:underline ml-2">
            ثبت‌نام
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
