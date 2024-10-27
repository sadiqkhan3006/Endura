import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { SIgnup } from "./pages/SIgnup";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Brands from "./pages/Brands";

function App() {
  function ScrollToTopOnNavigate() {
    const location = useLocation();
    //console.log("Location:", location.pathname);
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [location.pathname]);

    return null;
  }
  return (
    <div className="overflow-hidden ">
      <Navbar />
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trustedby" element={<Brands />} />
        <Route path="/signup" element={<SIgnup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
