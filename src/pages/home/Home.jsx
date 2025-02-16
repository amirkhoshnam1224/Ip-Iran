import { FQASection } from '../../components/FAQSection/FAQSection';
import ProductShowcase from '../../components/productShowcase/ProductShowcase';
import HeroSection from '../../components/heroSection/HeroSection';
import PricingSection from '../../components/pricingSection/PricingSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';

function Home() {
  return (
    <div className="w-full  flex flex-col items-center   gap-6  " >
      <HeroSection />
      <div className=' w-11/12 flex flex-col justify-center items-center gap-16 '>
        <div className="" dir="rtl">
        <h1 className="font-bold text-[20px] md:text-[28px]">آی‌پی ثابت و معتبر ایران</h1>
          <FeaturesSection />
        </div>
        <div className=" w-full " dir="rtl">
        <h2 className="text-[28px] font-bold mb-12">معرفی</h2>
          <ProductShowcase />
        </div>
        <div className="  " dir="rtl">
        <h2 className="text-[28px] font-bold">سوالات متداول</h2>
          <div className="w-full p-4 ">
            <FQASection />
          </div>
        </div>
        <div className="w-full  " dir='rtl'>
          <div className="">
            <h2 className="text-[18px] md:text-[28px] font-bold mb-12">خرید</h2>
            <PricingSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
