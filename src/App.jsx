import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Purchase from "./pages/purchase/Purchase";
import Contact from "./pages/contact/Contact";
import Crm from "./pages/crm/Crm";
import InvoicePage from "./pages/invoicePage/InvoicePage";
import SignUp from "./pages/signUp/SignUp";
import Login from './pages/login/Login'
import CreateUser from "./pages/createUser/CreateUser";
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
            <Route path="signUp" element={<SignUp />} />
            <Route path="login" element={<Login/>}/>
            <Route path="createUser" element={<CreateUser/>}/>
            <Route path="/invoice/:mounth/:price/:off" element={<InvoicePage />} />

            {/* مسیرهای ناموجود */}
            <Route path="*" element={<div>صفحه پیدا نشد</div>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
