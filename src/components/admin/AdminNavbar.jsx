import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LogOut, LayoutDashboard, Globe } from "lucide-react";
import logo from "../../assets/new-logo-2.png";

export const AdminNavbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === "/admin" || location.pathname === "/admin/";

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/admin/login");
    } catch (err) {
      console.error("Failed to logout", err);
    }
  };

  return (
    <header
      className="shadow-sm border-bottom"
      style={{
        backgroundColor: "#ffffff",
        borderColor: "#f0d5cc",
      }}
    >
      <div
        className="d-flex align-items-center justify-content-between"
        style={{
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingTop: "0.85rem",
          paddingBottom: "0.85rem",
        }}
      >
        {/* Brand Logo & Title */}
        <div className="d-flex align-items-center gap-3">
          <Link to="/admin" className="d-flex align-items-center text-decoration-none">
            <img
              src={logo}
              alt="Pop & Palm"
              style={{ height: "46px", objectFit: "contain" }}
            />
          </Link>
          <div className="d-none d-sm-block border-start ps-3" style={{ borderColor: "#ffc3ab" }}>
            <span
              className="badge px-2.5 py-1 text-uppercase"
              style={{
                backgroundColor: "#fff2ec",
                color: "#347440",
                fontSize: "0.72rem",
                letterSpacing: "1.5px",
                fontWeight: 600,
                border: "1px solid #ffc3ab",
                borderRadius: "50px",
              }}
            >
              CMS Portal
            </span>
          </div>
        </div>

        {/* Action Links */}
        <div className="d-flex align-items-center gap-2 gap-md-3">
          {!isDashboard && (
            <Link
              to="/admin"
              className="btn btn-sm d-flex align-items-center gap-1.5 text-decoration-none px-3 py-1.5"
              style={{
                color: "#347440",
                fontWeight: 500,
                borderRadius: "50px",
                backgroundColor: "#f4f8f4",
                border: "1px solid rgba(52, 116, 64, 0.2)",
              }}
            >
              <LayoutDashboard size={15} />
              <span>Dashboard</span>
            </Link>
          )}

          <Link
            to="/blog"
            target="_blank"
            className="btn btn-sm d-none d-lg-flex align-items-center gap-1.5 text-decoration-none px-3 py-1.5"
            style={{
              color: "#666666",
              backgroundColor: "transparent",
              borderRadius: "50px",
              border: "1px solid #e2d2ca",
            }}
            title="View public website"
          >
            <Globe size={14} />
            <span>View Website</span>
          </Link>

          {/* User info & Logout */}
          <div
            className="d-flex align-items-center gap-2 ps-2 ps-md-3 border-start"
            style={{ borderColor: "#f0d5cc" }}
          >
            <div
              className="d-none d-xl-flex align-items-center justify-content-center rounded-circle"
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#347440",
                color: "#ffffff",
                fontSize: "0.85rem",
                fontWeight: 600,
              }}
            >
              {currentUser?.email ? currentUser.email.charAt(0).toUpperCase() : "A"}
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-sm d-flex align-items-center gap-1 px-2.5 py-1.5"
              style={{
                color: "#dc3545",
                backgroundColor: "#fff5f5",
                border: "1px solid rgba(220, 53, 69, 0.2)",
                borderRadius: "50px",
              }}
              title="Logout"
            >
              <LogOut size={14} />
              <span className="d-none d-sm-inline font-weight-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;

