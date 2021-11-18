import "./App.css";
import Navbar from "./pages/components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/components/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Router Paths */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
