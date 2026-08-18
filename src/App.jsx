import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
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

// Admin & Auth Imports
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import BlogEditor from "./pages/admin/BlogEditor";

function App() {
  useScrollToTop();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <AuthProvider>
      <div className="global-style">
        {/* Render public Navbar only on public pages */}
        {!isAdminRoute && <Navbar />}

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<MainAbout />} />
          <Route path="/gallery/:category?" element={<Gallery />} />
          <Route path="/galleryimages/:category" element={<GalleryImages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceName" element={<Service />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:blogName" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/new"
            element={
              <ProtectedRoute>
                <BlogEditor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/edit/:id"
            element={
              <ProtectedRoute>
                <BlogEditor />
              </ProtectedRoute>
            }
          />
        </Routes>

        {/* Render public Footer only on public pages */}
        {!isAdminRoute && <Footer />}
      </div>
    </AuthProvider>
  );
}

export default App;

