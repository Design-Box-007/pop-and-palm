import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Services from "./pages/Services";
import GalleryImages from "./pages/GalleryImages";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components-2/Navbar/Nabar";
import Service from "./pages/Service";
import useScrollToTop from "./components-2/ScrollToTop/ScrollToTop";
import MainAbout from "./components-2/AboutMain/MainAbout";
import Footer from "./components/Footer";

function App() {
  useScrollToTop();
  return (
    <div className="global-style">
      {/* <Header /> */}
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/gallery/:category?" element={<Gallery />} />
        <Route path="/galleryimages/:category" element={<GalleryImages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceName" element={<Service />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:blogName" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
