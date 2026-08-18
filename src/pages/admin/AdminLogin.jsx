import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/admin.css";
import { Lock, Mail, AlertCircle, ArrowLeft, Eye, EyeOff } from "lucide-react";
import logo from "../../assets/new-logo-2.png";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from?.pathname || "/admin";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate(redirectPath, { replace: true });
    } catch (err) {
      console.error("Login failed:", err);
      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/wrong-password" ||
        err.code === "auth/user-not-found"
      ) {
        setError("Invalid email or password. Please check your credentials.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many failed attempts. Please try again in a few minutes.");
      } else if (err.message && err.message.includes("API key")) {
        setError("Firebase API Key is missing. Please check .env.local.");
      } else {
        setError(err.message || "Failed to log in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 px-3 py-5"
      style={{
        backgroundColor: "#fff2ec",
        backgroundImage: "radial-gradient(#ffc3ab 0.75px, transparent 0.75px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div
        className="admin-card shadow-lg"
        style={{
          maxWidth: "460px",
          width: "100%",
          padding: "36px 36px",
          borderRadius: "24px",
          marginBottom: 0,
        }}
      >
        {/* Brand Logo & Heading */}
        <div className="text-center mb-4 pb-1">
          <Link to="/">
            <img
              src={logo}
              alt="Pop & Palm"
              className="mb-3"
              style={{ height: "66px", objectFit: "contain" }}
            />
          </Link>
          <h2 className="admin-page-title" style={{ fontSize: "1.75rem" }}>
            Admin Portal
          </h2>
          <p className="admin-page-subtitle">
            Sign in to manage and publish blog stories
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div
            className="alert alert-danger d-flex align-items-start gap-2 mb-4 border-0"
            role="alert"
            style={{ borderRadius: "14px", padding: "14px 18px", backgroundColor: "#fdf2f2", color: "#9b1c1c" }}
          >
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <span className="small font-weight-medium">{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label className="admin-label">
              <span>Admin Email</span>
            </label>
            <div className="input-group">
              <span
                className="input-group-text"
                style={{
                  backgroundColor: "#fffaf7",
                  borderColor: "#e8d5cc",
                  borderRight: "none",
                  borderRadius: "12px 0 0 12px",
                  padding: "10px 14px",
                }}
              >
                <Mail size={16} style={{ color: "#347440" }} />
              </span>
              <input
                type="email"
                className="form-control"
                style={{
                  backgroundColor: "#fffaf7",
                  borderColor: "#e8d5cc",
                  borderLeft: "none",
                  borderRadius: "0 12px 12px 0",
                  padding: "12px 16px",
                  color: "#222222",
                  fontSize: "0.95rem",
                  boxShadow: "none",
                }}
                placeholder="admin@popandpalm.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div className="admin-form-group">
            <label className="admin-label">
              <span>Password</span>
            </label>
            <div className="input-group">
              <span
                className="input-group-text"
                style={{
                  backgroundColor: "#fffaf7",
                  borderColor: "#e8d5cc",
                  borderRight: "none",
                  borderRadius: "12px 0 0 12px",
                  padding: "10px 14px",
                }}
              >
                <Lock size={16} style={{ color: "#347440" }} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                style={{
                  backgroundColor: "#fffaf7",
                  borderColor: "#e8d5cc",
                  borderLeft: "none",
                  borderRight: "none",
                  padding: "12px 16px",
                  color: "#222222",
                  fontSize: "0.95rem",
                  boxShadow: "none",
                }}
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <button
                type="button"
                className="input-group-text"
                style={{
                  backgroundColor: "#fffaf7",
                  borderColor: "#e8d5cc",
                  borderLeft: "none",
                  borderRadius: "0 12px 12px 0",
                  padding: "10px 14px",
                  color: "#888888",
                }}
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="admin-btn-primary w-100 mt-3"
            style={{
              padding: "14px 24px",
              fontSize: "1.15rem",
              fontFamily: '"Boska-Variable", "Playfair Display", Georgia, serif',
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                <span style={{ fontFamily: '"Boska-Variable", "Playfair Display", Georgia, serif', fontWeight: 700, letterSpacing: "0.5px" }}>
                  Signing In...
                </span>
              </>
            ) : (
              <span style={{ fontFamily: '"Boska-Variable", "Playfair Display", Georgia, serif', fontWeight: 700, letterSpacing: "0.5px" }}>
                Sign In to Dashboard &rarr;
              </span>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center mt-4 pt-3 border-top" style={{ borderColor: "#f0d5cc" }}>
          <Link
            to="/"
            className="text-decoration-none small d-inline-flex align-items-center gap-1.5 font-weight-medium"
            style={{ color: "#347440" }}
          >
            <ArrowLeft size={14} />
            <span>Back to Public Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;


