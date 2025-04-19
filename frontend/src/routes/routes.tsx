import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Login from "../components/screens/Login"
import Register from "../components/screens/Register"
import Shopcart from "../components/screens/Shopcart"
import Products from "../components/screens/Products"
import Logout from "../components/screens/Logout"
import Admin from "../components/screens/Admin"

const routes = () => {
  return (
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/shopcart" element={<Shopcart/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default routes
