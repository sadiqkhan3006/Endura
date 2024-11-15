import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { SIgnup } from "./pages/SIgnup";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Brands from "./pages/Brands";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <script>
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1306653380357744');
          fbq('track', 'PageView');
        `}
        </script>
        <noscript>{`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1306653380357744&ev=PageView&noscript=1" />`}</noscript>
      </Helmet>
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
