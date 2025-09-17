// App.jsx
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

function Navigation() {
  const navigate = useNavigate(); // hook burada kullanılmalı

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <button onClick={() => navigate("/Home")}>Home</button>
      <button onClick={() => navigate("/Products")}>Products</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navigation /> {/* Router içinde olduğu için useNavigate çalışıyor */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="Products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
