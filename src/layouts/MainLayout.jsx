import Header from "./Header"; // مسیر کامپوننت Header
import Footer from "./Footer"; // مسیر کامپوننت Footer
import { Outlet } from "react-router-dom"; // برای نمایش محتوای صفحات

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
