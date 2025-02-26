import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar_new from "./components/Navbar_new";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { Helmet } from "react-helmet-async";
import { useEffect, lazy, Suspense } from "react";

// Lazy-loaded components (loaded only when needed)
const Home = lazy(() => import("./pages/Home"));
const Brands = lazy(() => import("./pages/Brands"));
const Studio = lazy(() => import("./pages/Studio"));
const Signup = lazy(() => import("./pages/SIgnup"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsCondition = lazy(() => import("./pages/TermsCondition"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const DownloadNow = lazy(() => import("./pages/DownloadNow"));

// Scroll to top on route change
function ScrollToTopOnNavigate() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <SmoothScroll className="overflow-hidden relative">
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
          fbq('init', '3776893605905384');
          fbq('track', 'PageView');
        `}
        </script>
        <noscript>{`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3776893605905384&ev=PageView&noscript=1"/>`}</noscript>
      </Helmet>

      <Navbar_new />
      <ScrollToTopOnNavigate />

      {/* Suspense to show a fallback while lazy components load */}
      <Suspense
        fallback={
          <div className="bg-white h-[100vh] w-full absolute z-20">
            <div className=" mt-[50%] ml-[50%] pageLoader "></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trustedby" element={<Brands />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<TermsCondition />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/download" element={<DownloadNow />} />
        </Routes>
      </Suspense>

      <Footer />
    </SmoothScroll>
  );
}

export default App;
