import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/ui/Layout";
import Home from "../components/screens/Home";
import Login from "../components/screens/Login";
import Register from "../components/screens/Register";
import Shopcart from "../components/screens/Shopcart";
import Products from "../components/screens/Products";
import Logout from "../components/screens/Logout";
import Admin from "../components/screens/Admin/Admin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<Products />} />
          <Route path="shopcart" element={<Shopcart />} />
          <Route path="logout" element={<Logout />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
