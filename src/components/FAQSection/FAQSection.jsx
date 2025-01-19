import React from "react";
import {Accordion,AccordionHeader,AccordionBody,}from"@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function FQASection() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                آیا بعد از خرید ip iran میتونم به بانک ها و سایت های ایرانی دسترسی داشته باشم؟</AccordionHeader>
                <AccordionBody>
                    
بله :  بعد از خرید اشتراک سرویس ها ، اکانت به همراه ip سرور ایران برای شما جهت اتصال ارسال می شود
و پس از اینکه از طریق بخش آموزش سایت ، یوزرنیم و پسورد و آدرس سرور را بر روی دستگاه خود تنظیم کردید ؛ ip دستگاه شما به ip ایران تغییر می یابد و می توانید به کلیه ی همراه بانک ها و اینترنت بانک ها و هر سایت ایرانی دیگری دسترسی داشته باشید
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                آیا استفاده از ip iran novin امن است؟                </AccordionHeader>
                <AccordionBody>

                پس از اتصال ، تمام اطلاعات ارسال شده بین دستگاه شما و سرورهای ip iran novin رمزگذاری می شود.
همچنین لازم به ذکر است که در زمان استفاده از سایت هایی که از پروتکل SSL یا همان https استفاده می کنند 
مانند بانک ها و سایت هایی با قابلیت ثبت نام یا تراکنش مالی ، تمام اطلاعات بین دستگاه شما و سایت مدنظر به صورت نقطه به نقطه رمزگذاری می شود.
این بدین معناست که تمام اطلاعات ارسالی به صورت رمزگذاری شده از سرورهای ip iran novin عبور خواهند کرد.
و
سرویس های ip iran novin توسط کانشن کاملا معتبر و بی المللی open vpn و L2TP سرویس ارائه میدهد
که در تمای پلتفرم های معروف مثل play store و app store موجود است و در هنگام نصب و فعال سازی هیچ گونه دسترسی از گوشی شما گرفته نمی شود و صرفا از لحاظ علمی ip دستگاه شمارا تغییر میدهد که بهترین روش و امن ترین روش برای دسترسی به ip ایران است

                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                برای سایت های قضایی هم قابل استفاده است این سرویس؟                </AccordionHeader>
                <AccordionBody>
                بله دوست عزیز
شما پس از فعال سازی در کمتر از 5 دقیقه میتوانید به کلیه سایت های قضایی مثل ثنا و سخا و سجام و بعنوان مثال بررسی ممنوع الخروجی قبل از سفر به ایران خیلی مهم است تا جلوی گیت گذرنامه سورپرایز نشوید 
برای چک کردن ممنوع الخروجی باید وارد سایت سخا متعلق به اداره پلیس گذرنامه شوید 

تنها با داشتن وی پی ان شبیه این وی پی ان می‌توان وارد سخا شده و ظرف ۳ دقیقه بدون استرس ممنوع الخروجی خودتون رو چک کنید

                </AccordionBody>
            </Accordion>
        </>
    );
}