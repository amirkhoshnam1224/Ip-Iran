import { useNavigate } from "react-router-dom";

function CardPricing({ mounth, price, off }) {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate(`/invoice/${mounth}/${price}/${off}`);
  };

  return (
    <div className="">
      <div className="bg-white border rounded text-center px-1 pt-4 pb-6 shadow">
        <div className="mt-4">
          <span className="text-red-500 text-2xl line-through">{off}$</span>
        </div>
        <h3 className="text-2xl">{price}$</h3>
        <div className="mt-1">
          <span className="font-bold text-3xl">{mounth}</span>
          <span className="text-gray-600">/ ماه</span>
        </div>
        <div className="mt-6">
          <div className="font-bold text-lg">بدون محدودیت دسترسی</div>
          <div className="mt-3">دوکاربر</div>
          <div className="mt-3">بدون محدودیت حجم</div>
          <div className="mt-3">کانکشن: Open vpn . V2ray . L2tp</div>
        </div>
        <div className="mt-8">
          <button
            onClick={handlePurchase}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            خرید
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPricing;
