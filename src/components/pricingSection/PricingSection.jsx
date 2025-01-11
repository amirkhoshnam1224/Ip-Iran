import CardPricing from "../cardPricing/CardPricing"


function PricingSection() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-4">
      <CardPricing mounth="تست" price="0" off="0" />
      <CardPricing mounth="1" price="4" off="0" />
      <CardPricing mounth="3" price="9" off="30" />
      <CardPricing mounth="6" price="14" off="40" />
      <CardPricing mounth="12" price="24" off="50" />
    </div>
  );
}

export default PricingSection
