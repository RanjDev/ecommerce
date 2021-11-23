import "./App.css";
import Navbar from "./pages/components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/components/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Footer from "./pages/components/Footer";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPageNotFound from "./pages/components/ErrorPageNotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
 
      {/* Router Paths */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:details" element={<ProductDetailPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/*" element={<ErrorPageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
