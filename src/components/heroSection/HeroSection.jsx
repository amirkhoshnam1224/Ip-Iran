import header from '../../assets/image/5138889908688104748.jpg';
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="relative w-[100%] flex h-[60vh]  md:h-[70vh]"  style={{ backgroundColor: "#D2D2D2" }}>
      {/* تصویر پس‌زمینه */}
      <div className=' w-6/12 h-[100%]'>
        <img
          src={header}
          alt="Hero Image"
          className=" h-full object-cover md:object-contain "
        />
      </div>
      {/* متن روی تصویر */}
      <div className="flex items-center justify-center w-6/12">
        <div className='flex flex-col items-center gap-2 md:gap-6 text-white text-center font-bold' >
          <p className="text-white font-bold text-[22px] " >
            IP IRAN NOVIN
          </p>

          <p className='text-[10px] sm:text-[14px] md:text-[18px]' dir='rtl'>
            فعال سازی سرویسه ip ایران در کمتر از پنج دقیقه به صورت رایگان
          </p>
          <ul className='text-[10px] sm:text-[14px] md:text-[16px]'>
            <li>تمامی سرویس دوکاربره میباشند</li>
            <li>بدون نیاز به احراز هویت</li>
            <li>بدون محدودیت حجم </li>
            <li>بدون محدودیت دسترسی</li>
          </ul>
      
           <Link
          to="https://t.me/ipirannovin"
          className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 
          text-white py-1 sm:py-2 px-3 sm:px-6 text-[16px] sm:text-[18px] rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center font-semibold whitespace-nowrap ml-1"
        >
          تست رایگان
        </Link>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
