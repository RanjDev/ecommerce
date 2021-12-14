import "./App.css";
import Navbar from "./pages/components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/components/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Footer from "./pages/components/Footer";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import ErrorPageNotFound from "./pages/components/ErrorPageNotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import NormalNavbar from "./pages/components/NormalNavbar";
// import { useSelector } from "react-redux";
// import jwtDecode from "jwt-decode";
import AdminNavbar from "./pages/components/AdminNavbar";
import ShowUsers from "./pages/ShowUsers";
import AddUsers from "./pages/AddUsers";
import UpdateProduct from "./pages/UpdateProduct";
import AdminShowProducts from "./pages/AdminShowProducts";

function App() {
  // const token = useSelector((state) => state.auth.user.token);

  // const role = () => {
  //   if (token !== "") {
  //     const decodedToken = jwtDecode(token);
  //     return decodedToken.role;
  //   } else {
  //     return "";
  //   }
  // };
  return (
    <div className="overflow-hidden ">
      <Navbar />

      <NormalNavbar />
      <AdminNavbar />
      {/* {role() === "admin" ? <AdminNavbar /> : <NormalNavbar />} */}

      {/* Router Paths */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:details" element={<ProductDetailPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-products" element={<AddProduct />} />
        <Route path="/show-users" element={<ShowUsers />} />
        <Route path="/add-users" element={<AddUsers />} />
        <Route path="/show-products" element={<AdminShowProducts />} />
        <Route path="/update-products/:id" element={<UpdateProduct />} />

        <Route path="/*" element={<ErrorPageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
