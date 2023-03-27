import { Routes, Route } from "react-router-dom";

//locally imported
import AdminOrders from "./pages/Admin/AdminOrders";
import Foods from "./pages/Admin/Foods.js";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import CartPage from "./pages/CartPage";
import FoodDetails from "./pages/FoodDetails";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import Dashboard from "./pages/User/Dashboard";
import Orders from "./pages/User/Orders";
import Profile from "./pages/User/Profile";
import Categories from "./pages/Categories";
import CategoryFood from "./pages/CategoryFood";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateFood from "./pages/Admin/CreateFood.js"
import CreateCategory from "./pages/Admin/CreateCategory.js"
import UpdateFood from "./pages/Admin/UpdateFood.js"
import Pagenotfound from './pages/Pagenotfound.js'
import AdminRoute from "./components/Routes/AdminRoute";
import PrivateRoute from "./components/Routes/Private";
import { useCart } from "./contex/cart.js";


function App() {

  const [cart, setCart] = useCart();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
        <Route path="/food/:slug" element={<FoodDetails setCart={setCart} cart={cart} />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryFood />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-food" element={<CreateFood />} />
          <Route path="admin/food/:slug" element={<UpdateFood />} />
          <Route path="admin/foods" element={<Foods />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
