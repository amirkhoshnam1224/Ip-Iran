import CardPricing from "../cardPricing/CardPricing"


function PricingSection() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
      <CardPricing mounth="12" price="24" off="48" />
      <CardPricing mounth="6" price="14" off="24" />
      <CardPricing mounth="3" price="9" off="12" />
      <CardPricing mounth="1" price="4" off="4" />
      <CardPricing mounth="تست رایگان" price="0" off="0" />
    </div>
  );
}

export default PricingSection;
