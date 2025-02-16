import NavbarCustom from "./Header"; // مسیر کامپوننت Header
import Footer from "./Footer"; // مسیر کامپوننت Footer
import { Outlet } from "react-router-dom"; // برای نمایش محتوای صفحات

const MainLayout = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <NavbarCustom />

      {/* Main Content */}
      <main className="">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
