import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Purchase from "./pages/purchase/Purchase";
import Contact from "./pages/contact/Contact";
import Crm from "./pages/crm/Crm";

function App() {
  return (
    <div  className="font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path="contact" element={<Contact />} />
            <Route path="crm" element={<Crm />} />
            {/* مسیرهای ناموجود */}
            <Route path="*" element={<div>صفحه پیدا نشد</div>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
