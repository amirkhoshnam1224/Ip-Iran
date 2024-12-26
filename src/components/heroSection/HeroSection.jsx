import header from '../../assets/image/5138889908688104748.jpg';

function HeroSection() {
  return (
    <div className="relative w-full md:h-[80vh]">
      {/* تصویر پس‌زمینه */}
      <img
        src={header}
        alt="Hero Image"
        className="w-full h-full object-cover"
      />

      {/* متن روی تصویر */}
      <div className="absolute inset-0 flex items-center justify-end bg-black bg-opacity-25">
        <h1 className="text-white text-1xl sm:text-4xl md:text-6xl font-bold mr-[7%] sm:mr-[7%] md:mr-[7%]">
          Welcome to ip iran
        </h1>
      </div>



    </div>
  );
}

export default HeroSection;
