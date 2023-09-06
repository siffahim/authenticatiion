import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import SignOut from "./pages/SignOut/SignOut";
import SignIn from "./pages/Signin/Signin";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-out" element={<SignOut />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
