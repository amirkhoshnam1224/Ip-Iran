import { FQASection } from '../../components/FAQSection/FAQSection';
import ProductShowcase from '../../components/productShowcase/ProductShowcase';
import HeroSection from '../../components/heroSection/HeroSection';
import PricingSection from '../../components/pricingSection/PricingSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';

function Home() {
  return (
    <div className="w-full h-full  " >
      <HeroSection />
      <div className="flex justify-center mt-4" dir="rtl">
        <FeaturesSection/>
      </div>
      <div className="mt-6" dir="rtl">
        <ProductShowcase />
      </div>
      <div className="flex justify-center m-2 px-4 py-8" dir="rtl">
        <div className="w-full max-w-5xl">
          <FQASection />
        </div>
      </div>
      <div className="w-full ">
        <PricingSection />
      </div>

    </div>
  );
}

export default Home;
