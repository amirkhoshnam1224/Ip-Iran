import logo from '../assets/icon/logo.jpeg';
import backgroundImage from '../assets/icon/7e89292b-ee1e-4da0-b752-f53299d0aa01.jpg';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className=" text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}

    >
      <div className="  bg-black bg-opacity-25">
        <div className="container mx-auto flex justify-between items-center py-45">
          {/* دکمه خرید اشتراک */}
          <a href="/plans"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded md:block "
          >
            <Link to="/login" className=" hover:ml-2">
              ثبت‌نام / ورود
            </Link>          
          </a>

          {/* منوی ناوبری */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-gray-300">خانه</a>
            <a href="/plans" className="hover:text-gray-300">پلن‌ها</a>
            <a href="/contact" className="hover:text-gray-300">تماس با ما</a>
          </nav>

          {/* لوگو */}
          <div className="text-2xl font-bold flex">
            <img
              src={logo}
              alt="Logo"
              className="max-w-[50px] max-h-[50px] object-contain"
            />
          </div>

          {/* منوی موبایل */}
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
