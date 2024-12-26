import { FQASection } from '../../components/FAQSection/FAQSection';
import ProductShowcase from '../../components/productShowcase/ProductShowcase';
import HeroSection from '../../components/heroSection/HeroSection';
import PricingSection from '../../components/pricingSection/PricingSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';

function Home() {
  return (
    <div className="w-full h-full  ">
      <HeroSection />
      <div className="flex justify-center mt-4">
        <FeaturesSection/>
      </div>
      <div className="mt-6">
        <ProductShowcase />
      </div>
      <div className="flex justify-center m-2  px-4 py-8   ">
        <div className="w-full max-w-5xl">
          <FQASection />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 bg-black bg-opacity-25 ">
        <PricingSection />
      </div>

    </div>
  );
}

export default Home;
