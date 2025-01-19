import { useParams } from "react-router-dom";

function InvoicePage() {
  const { mounth, price, off } = useParams();

  const finalPrice = (price - (price * off) / 100).toFixed(2);
  const tax = (finalPrice * 0.09).toFixed(2); // 9% مالیات
  const total = (finalPrice * 1.09).toFixed(2); // جمع کل با مالیات

  return (
    <div className="p-8 bg-gradient-to-b from-blue-500 to-blue-800 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">فاکتور شما</h1>
        <p className="mb-2">پلن انتخابی: {mounth} ماه</p>
        <p className="mb-2">قیمت اولیه: {price}$</p>
        <p className="mb-2">تخفیف: {off}%</p>
        <p className="mb-2">قیمت نهایی: {finalPrice}$</p>
        <p className="mb-2">مالیات: {tax}$</p>
        <p className="mb-4 font-bold">جمع کل: {total}$</p>
        <a
          href={`https://paymentgateway.com/pay?amount=${total}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block text-center"
        >
          پرداخت
        </a>
        <div className="mt-4 text-center">
          <a href="/" className="text-blue-500 hover:underline">بازگشت به صفحه اصلی</a>
        </div>
      </div>
    </div>
  );
}

export default InvoicePage;
