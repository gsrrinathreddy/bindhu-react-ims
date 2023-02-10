import logo from "./logo.svg";
import "./App.css";
import IMSCart from "./components/IMSCart/index";
import CakeView from "./features/cake/CakeView/index";
import { useSelector } from "react-redux";
import IcecreamView from "./features/icecream/IcecreamView";
import IMSNavbar from "./components/IMSNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cakes from "./pages/Cakes";
import Icecreams from "./pages/Icecreams";
import Landingpage from "./pages/Landingpage";
import Favoritepage from "./pages/Favoritepage";

import Flowers from "./pages/Flowers";
import Gifts from "./pages/Gifts";
import Chocolates from "./pages/Chocolates";
import Cartpage from "./pages/Cartpage";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Deliverypage from "./pages/Deliverypage";
import Pagenotfound from "./pages/Pagenotfound";
import Signinpage from "./pages/Signinpage";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Products from "./pages/Products";

function App() {
  let p = [
    "Cakes",
    "Icecreams",
    "Chocolates",
    "Flowers",
    "Gifts",
    "Users",
    "Products",
  ];
  let s = ["Profile", "Account", "Dashboard", "Logout"];
  let noOfCakes = useSelector((state) => state.cake.numOfCakes);
  let ordercakes = useSelector((state) => state.cake.ordercakes);
  console.log("someThing");
  return (
    <div className="App">
      <BrowserRouter>
        <IMSNavbar pages={p} settings={s}></IMSNavbar>
        <Routes>
          <Route path="/Cakes" element={<Cakes />}></Route>
          <Route path="/Icecreams" element={<Icecreams />}></Route>
          <Route path="/Chocolates" element={<Chocolates />}></Route>
          <Route path="/Flowers" element={<Flowers />}></Route>
          <Route path="/Gifts" element={<Gifts />}></Route>
          <Route path="/Cartpage" element={<Cartpage />}></Route>
          <Route path="/" element={<Flowers />}></Route>
          <Route path="/f" element={<Cakes />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Account" element={<Account />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Delivery" element={<Deliverypage />}></Route>
          <Route path="/*" element={<Pagenotfound />}></Route>
          <Route path="/Signinpage" element={<Signinpage />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Favoritepage" element={<Favoritepage />}></Route>
          <Route path="/Users" element={<Users />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
