import { useState, useEffect } from "react";
import logo from '../assets/icon/logo.png';
import { Link } from "react-router-dom";

const NavbarCustom = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      setIsNavbarVisible(false); // هنگام اسکرول نوبار مخفی شود

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setIsNavbarVisible(true); // بعد از توقف اسکرول، نوبار به آرامی نمایش داده شود
      }, 900); // تنظیم تأخیر 700 میلی‌ثانیه
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 shadow-md transition-transform duration-700 ease-in-out 
      ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"} bg-black bg-opacity-35 backdrop-blur-md mt-1`}
    >
      <div className="container mx-auto flex justify-between items-center py-1">
        {/* دکمه ورود */}
        <Link
          to="/login"
          className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 
          text-white py-1 sm:py-2 px-3 sm:px-6 text-[14px] sm:text-[16px] rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center font-semibold whitespace-nowrap ml-1"
        >
          ثبت‌نام / ورود
        </Link>

        {/* نوبار */}
        <nav className="w-8/12 flex justify-end gap-6 ">
          <a href="/contact" className="relative text-white text-[14px] sm:text-[18px] font-semibold hover:text-green-400 transition duration-300">
            ارتباط با ما
          </a>
          <a href="/plans" className="relative text-white text-[14px] sm:text-[18px] font-semibold hover:text-green-400 transition duration-300">
            پلن‌ها
          </a>
          <a href="/" className="relative text-white text-[14px] sm:text-[18px] font-semibold hover:text-green-400 transition duration-300">
            خانه
          </a>
        </nav>

        {/* لوگو */}
        <img
          src={logo}
          alt="Logo"
          style={{backgroundColor:"#D2D2D2"}}
          className="w-[40px] h-[40px] rounded-full shadow-lg border-2 border-green-400 bg-white "
        />
      </div>
    </header>
  );
};

export default NavbarCustom;
