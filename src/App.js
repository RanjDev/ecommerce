import "./App.css";
import Navbar from "./pages/components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/components/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";

function App() {
  return (
    <div className="">
      <Navbar />

      {/* Router Paths */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
