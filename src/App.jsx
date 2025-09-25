import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Footer from "./components-2/Footer/Footer";
import Services from "./pages/Services";
import GalleryImages from "./pages/GalleryImages";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components-2/Navbar/Nabar";
import Service from "./pages/Service";
import ScrollToTop from "./components-2/ScrollToTop/ScrollToTop";
import useScrollToTop from "./components-2/ScrollToTop/ScrollToTop";

function App() {
  useScrollToTop();
  return (
    <div className="global-style">
      {/* <Header /> */}
      <Navbar />
      {/* <ScrollToTop/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/:category?" element={<Gallery />} />
        <Route path="/galleryimages/:category" element={<GalleryImages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceName" element={<Service />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:blogName" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
}

export default App;
