import { CardProductShowcase } from "../cardFeatures/CardProductShowcase"
import sana from '../../assets/image/sana.jpg'
import footbal from '../../assets/image/footbal.jpg'
import bank from '../../assets/image/bank.jpg'
import movie from '../../assets/image/movie.jpg'
function ProductShowcase() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-1">
      <CardProductShowcase

        image={sana}
        header="امور قضایی"
        paragraf="
با ip iran وارد سامانه های قضایی مثل سامانه ثنا شوید 
و امور حقوقی خود را پیگیری کنید

۱- مشاهده ابلاغیه های الکترونیکی
۲- ثبتنام و احراز هویت
۳- پیگیری پرونده های حقوقی
۴- مدیریت اموال و املاک ایران
۵- پیگیری اسناد
۶- ارسال و دریافت درخواست ها
۷- ارسال مستندات و مدارک
۸- دسترسی به خدمات قانونی و حقوقی

و اطمینان و سرعت بالا
به عدالت دسترسی دارید"
      />
      <CardProductShowcase
        image={footbal}
        header="تماشای رایگان پخش زنده فوتبال"
        paragraf="فقط یک کلیک با دنیای هیجان انگیز و غیر قابل پیش بینی فوتبال فاصله داری 
 اونم به صورت کاملا رایگان 
الان به هیجان فوتبال بپیوندید 
 
با ip iran هیچ بازی رو از دست نده 
 
فوتبال ایران بدون مرز 
پخش زنده با گزارشگر های محبوب 
با کیفیت و سرعت بالا"/>

      <CardProductShowcase
        image={bank}
        header="امور بانکی"
        paragraf="
با ip iran به همراه بانک خود متصل شوید 
و امور بانکی تان را از خارج کشور اداره کنید
۱- انتقال وجه به حساب های ایران
۲- پرداخت قبوض، شارژ و اقساط بانکی
۳- مشاهده موجودی و گزارش تراکنش ها
۴- مدیریت کامل حساب بانکی ایران

بانک همیشه همراه تو با ip iran
هوشمندانه و بدون دردسر"/>

      <CardProductShowcase
        image={movie}
        header="تماشای کاملا رایگان فیلم و سریال های ایرانی"
        paragraf="
با ip iran محدودیت ها رو کنار بزن
و آرشیو بهترین فیلم و سریال های ایرانی 
با زیرنویس و دوبله
با کیفیت full HD و 4K
در دستان توست



وقتشه که غرق دنیای سینما بشی

الان به لحظات به یادماندنی بپیوندید
چیزی که میخوای رو همین حالا ببین

 هیچ محدودیتی نمیتونه فیلم باز ها رو متوقف کنه" />
    </div>
  )
}

export default ProductShowcase
