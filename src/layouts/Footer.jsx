function Footer() {
  return (
    <div className="bg-black bg-opacity-30 py-8 mt-8">
      
      <div className="container mx-auto text-center text-white">
        {/* اطلاعات تماس */}
        <p className="mb-4">email : ip.iran.noviin@gmail.com</p>

        {/* لینک‌های کاربردی */}
        <ul className="flex justify-center space-x-4 mb-4">
          <li><a href="/about" className="hover:text-gray-300">درباره ما</a></li>
          <li><a href="/terms" className="hover:text-gray-300">قوانین و مقررات</a></li>
          <li><a href="/privacy" className="hover:text-gray-300">حریم خصوصی</a></li>
          <li><a href="/faq" className="hover:text-gray-300">سوالات متداول</a></li>
        </ul>

        {/* شبکه‌های اجتماعی */}
        <div className="flex justify-center space-x-4 mb-4">
          {/* لینک به تلگرام */}
          <a href="https://t.me/ipirannovin" target="_blank" rel="noreferrer">
            Telegram
          </a>

          {/* لینک به شماره تلفن */}
          <a href="tel:+989058510939" rel="noreferrer">
            +98 905 851 0939
          </a>

          {/* لینک به اینستاگرام */}
          <a href="https://instagram.com/ip.iran.novin" target="_blank" rel="noreferrer">
            Instagram
          </a>

          {/* لینک به فیس‌بوک */}
          <a href="https://facebook.com/ip.iran" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>

        {/* کپی‌رایت */}
        <p className="">© 2022 IP Iran Novin. تمامی حقوق محفوظ است.</p>

      </div>
    </div>
  );
}

export default Footer;
