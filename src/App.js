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

function App() {
  return (
    <div className="">
      <Navbar />

      {/* Router Paths */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/*" element={<ErrorPageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
