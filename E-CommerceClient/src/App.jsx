// App.jsx
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./features/ui/pages/Home";
import Basket from "./features/ui/pages/Basket"
import Product from "./features/ui/pages/Product"
import MainLayout from "./features/ui/layouts/MainLayout";

import AdminProduct from "./features/admin/pages/Product";
import AdminBasket from "./features/admin/pages/Basket";
import AdminCustomer from "./features/admin/pages/Customer";
import AdminHome from "./features/admin/pages/Home";
import AdminLayout from "./features/admin/layouts/AdminLayout";



function App() {
  return (
    <Router>
      <Routes>
        {/* UI Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> {/* / */}
          <Route path="home" element={<Home />} />
          <Route path="product" element={<Product />} /> {/* /products */}
          <Route path="basket" element={<Basket />} /> {/* /products */}
        </Route>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="home" index element={<AdminHome />} />
          <Route path="product" element={<AdminProduct />} />
          <Route path="basket" element={<AdminBasket />} />
          <Route path="customer" element={<AdminCustomer />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
