
function CardPricing({ mounth, price, off }) {
    return (
      <div className="w-full sm:max-w-sm md:max-w-md px-4 mt-4 mx-auto">
        <div className="bg-white border rounded text-center px-4 pt-6 pb-8 shadow">
          <h3 className="text-2xl">{price}$</h3>
          <div className="mt-4">
            <span className="text-red-500 text-2xl line-through">{off}%</span>
          </div>
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
            <a href="#" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              خرید
            </a>
          </div>
        </div>
      </div>
    );
  }
export default CardPricing
