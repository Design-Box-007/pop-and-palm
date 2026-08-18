import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { getAllBlogs, deleteBlog } from "../../services/blogService";
import "../../styles/admin.css";
import {
  PlusCircle,
  Search,
  Edit2,
  Trash2,
  ExternalLink,
  BookOpen,
  Cloud,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

export const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const all = await getAllBlogs();
      setBlogs(all);
    } catch (err) {
      console.error("Failed to load blogs:", err);
      setMessage({ text: "Failed to fetch blogs from database.", type: "danger" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id, imageUrl) => {
    setDeleting(true);
    try {
      await deleteBlog(id, imageUrl);
      setMessage({ text: "Blog post deleted successfully!", type: "success" });
      setDeleteConfirmId(null);
      await fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog:", err);
      setMessage({ text: "Failed to delete blog. Please try again.", type: "danger" });
    } finally {
      setDeleting(false);
    }
  };

  const filteredBlogs = blogs.filter((b) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      b.title?.toLowerCase().includes(q) ||
      b.description?.toLowerCase().includes(q) ||
      b.category?.toLowerCase().includes(q)
    );
  });

  const dynamicCount = blogs.filter((b) => b.isDynamic).length;
  const staticCount = blogs.filter((b) => !b.isDynamic).length;

  return (
    <div className="admin-page-wrapper">
      <AdminNavbar />

      <main className="admin-container">
        {/* Banner Alert Message */}
        {message.text && (
          <div
            className={`alert alert-${message.type} alert-dismissible fade show d-flex align-items-center gap-2 mb-4 shadow-sm border-0`}
            role="alert"
            style={{
              borderRadius: "14px",
              padding: "16px 20px",
              backgroundColor: message.type === "success" ? "#e8f5e9" : "#ffebee",
              color: message.type === "success" ? "#2e7d32" : "#c62828",
            }}
          >
            {message.type === "success" ? <CheckCircle size={20} /> : <AlertTriangle size={20} />}
            <span className="font-weight-medium" style={{ fontSize: "0.95rem" }}>
              {message.text}
            </span>
            <button
              type="button"
              className="btn-close ms-auto"
              onClick={() => setMessage({ text: "", type: "" })}
            />
          </div>
        )}

        {/* Page Header & Actions */}
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4 pb-2">
          <div>
            <span className="admin-eyebrow">
              Management Console
            </span>
            <h1 className="admin-page-title">
              Articles & Blog Stories
            </h1>
            <p className="admin-page-subtitle">
              Publish and organize event styling inspirations and stories for Pop & Palm
            </p>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button
              onClick={fetchBlogs}
              className="admin-btn-secondary"
              title="Refresh Blogs"
            >
              <RefreshCw size={14} className={loading ? "spin" : ""} />
              <span>Refresh</span>
            </button>

            <Link
              to="/admin/new"
              className="admin-btn-primary"
            >
              <PlusCircle size={18} />
              <span>Create New Blog</span>
            </Link>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-md-4">
            <div className="admin-stat-card">
              <div>
                <span className="admin-stat-label">Total Published</span>
                <h3 className="admin-stat-number">{blogs.length}</h3>
              </div>
              <div
                className="admin-stat-icon-wrap"
                style={{ backgroundColor: "#fff2ec", color: "#347440" }}
              >
                <BookOpen size={24} />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="admin-stat-card">
              <div>
                <span className="admin-stat-label">Dynamic Live Posts</span>
                <h3 className="admin-stat-number" style={{ color: "#347440" }}>{dynamicCount}</h3>
              </div>
              <div
                className="admin-stat-icon-wrap"
                style={{ backgroundColor: "#e8f5e9", color: "#347440" }}
              >
                <Cloud size={24} />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="admin-stat-card">
              <div>
                <span className="admin-stat-label">Base Website Articles</span>
                <h3 className="admin-stat-number" style={{ color: "#888888" }}>{staticCount}</h3>
              </div>
              <div
                className="admin-stat-icon-wrap"
                style={{ backgroundColor: "#f5f5f5", color: "#777777" }}
              >
                <BookOpen size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Table Card */}
        <div className="admin-table-wrapper">
          <div className="admin-table-header">
            <div className="row g-2 align-items-center justify-content-between">
              <div className="col-12 col-md-5 col-lg-4">
                <div className="input-group">
                  <span
                    className="input-group-text"
                    style={{
                      backgroundColor: "#fffaf7",
                      borderColor: "#e8d5cc",
                      borderRight: "none",
                      paddingLeft: "14px",
                      paddingRight: "6px",
                      borderRadius: "12px 0 0 12px",
                    }}
                  >
                    <Search size={16} style={{ color: "#347440" }} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      backgroundColor: "#fffaf7",
                      borderColor: "#e8d5cc",
                      borderLeft: "none",
                      borderRadius: "0 12px 12px 0",
                      padding: "10px 14px",
                      fontSize: "0.92rem",
                      boxShadow: "none",
                    }}
                    placeholder="Search by title, category, keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#fffaf7",
                        borderColor: "#e8d5cc",
                        borderRadius: "12px",
                        marginLeft: "6px",
                        padding: "6px 14px",
                        fontSize: "0.85rem",
                      }}
                      type="button"
                      onClick={() => setSearchQuery("")}
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              <div className="col-auto text-muted small" style={{ fontWeight: 500 }}>
                Showing <strong>{filteredBlogs.length}</strong> of {blogs.length} articles
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            {loading ? (
              <div className="text-center py-5">
                <div
                  className="spinner-border"
                  role="status"
                  style={{ color: "#347440", width: "2.5rem", height: "2.5rem" }}
                >
                  <span className="visually-hidden">Loading articles...</span>
                </div>
                <p className="mt-2 text-muted small">Loading articles from database...</p>
              </div>
            ) : filteredBlogs.length === 0 ? (
              <div className="text-center py-5">
                <BookOpen size={40} className="mb-2 opacity-40" style={{ color: "#347440" }} />
                <h5 className="h6 text-muted">No blog posts found</h5>
                <p className="small text-muted mb-3">Create your first blog post using the button above.</p>
                <Link
                  to="/admin/new"
                  className="btn btn-sm text-decoration-none font-weight-bold px-3 py-1.5"
                  style={{
                    backgroundColor: "#ffc3ab",
                    color: "#222222",
                    borderRadius: "50px",
                  }}
                >
                  <PlusCircle size={15} className="me-1" />
                  Create Blog
                </Link>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="admin-table table-hover align-middle">
                  <thead>
                    <tr>
                      <th style={{ width: "90px" }}>Cover</th>
                      <th>Title & Excerpt</th>
                      <th>Category</th>
                      <th>Source</th>
                      <th>Date</th>
                      <th className="text-end" style={{ width: "170px" }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBlogs.map((blog) => (
                      <tr key={blog.id}>
                        {/* Cover Image */}
                        <td>
                          {blog.imgSrc ? (
                            <img
                              src={blog.imgSrc}
                              alt={blog.title}
                              className="rounded-3 object-fit-cover shadow-sm"
                              style={{ width: "68px", height: "50px", objectFit: "cover" }}
                            />
                          ) : (
                            <div
                              className="rounded-3 d-flex align-items-center justify-content-center text-muted"
                              style={{ width: "68px", height: "50px", backgroundColor: "#fff2ec" }}
                            >
                              <BookOpen size={18} />
                            </div>
                          )}
                        </td>

                        {/* Title & Excerpt */}
                        <td>
                          <div className="admin-table-title">
                            {blog.title}
                          </div>
                          <div className="admin-table-excerpt">
                            {blog.description}
                          </div>
                        </td>

                        {/* Category */}
                        <td style={{ whiteSpace: "nowrap" }}>
                          <span className="admin-badge-category">
                            {blog.category || "Events"}
                          </span>
                        </td>

                        {/* Storage Type */}
                        <td style={{ whiteSpace: "nowrap" }}>
                          {blog.isDynamic ? (
                            <span className="admin-badge-dynamic">
                              <Cloud size={13} />
                              <span>Live Firebase</span>
                            </span>
                          ) : (
                            <span className="admin-badge-static">
                              Default Static
                            </span>
                          )}
                        </td>

                        {/* Date */}
                        <td className="small text-muted" style={{ fontWeight: 500, whiteSpace: "nowrap" }}>
                          {blog.date}
                        </td>

                        {/* Actions */}
                        <td className="text-end" style={{ whiteSpace: "nowrap" }}>
                          <div className="d-inline-flex align-items-center gap-2">
                            {/* View Live */}
                            <Link
                              to={`/blog/${blog.slug}`}
                              target="_blank"
                              className="admin-action-btn"
                              style={{
                                backgroundColor: "#f4f8f4",
                                color: "#347440",
                                border: "1px solid rgba(52, 116, 64, 0.25)",
                              }}
                              title="View on live website"
                            >
                              <ExternalLink size={15} />
                            </Link>

                            {/* Edit (Available for dynamic posts) */}
                            {blog.isDynamic && (
                              <Link
                                to={`/admin/edit/${blog.id}`}
                                className="admin-action-btn"
                                style={{
                                  backgroundColor: "#fff2ec",
                                  color: "#347440",
                                  border: "1px solid #ffc3ab",
                                }}
                                title="Edit post"
                              >
                                <Edit2 size={15} />
                              </Link>
                            )}

                            {/* Delete (Available for dynamic posts) */}
                            {blog.isDynamic && (
                              <button
                                onClick={() => setDeleteConfirmId(blog.id)}
                                className="admin-action-btn"
                                style={{
                                  backgroundColor: "#fff5f5",
                                  color: "#dc3545",
                                  border: "1px solid rgba(220, 53, 69, 0.25)",
                                }}
                                title="Delete post"
                              >
                                <Trash2 size={15} />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Delete Confirmation Modal Dialog */}
        {deleteConfirmId && (() => {
          const targetBlog = blogs.find((b) => b.id === deleteConfirmId);
          return (
            <div
              className="modal fade show d-block"
              tabIndex="-1"
              style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)", zIndex: 1060 }}
            >
              <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "480px" }}>
                <div
                  className="modal-content border-0 shadow-2xl overflow-hidden"
                  style={{ borderRadius: "24px", border: "1px solid #f0d5cc" }}
                >
                  <div
                    className="modal-header p-3 px-4 border-0"
                    style={{ backgroundColor: "#dc3545", color: "#ffffff" }}
                  >
                    <h5 className="modal-title font-weight-bold d-flex align-items-center gap-2 h6 mb-0 text-white">
                      <Trash2 size={20} />
                      <span>Confirm Delete Article</span>
                    </h5>
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      onClick={() => setDeleteConfirmId(null)}
                      disabled={deleting}
                    />
                  </div>

                  <div className="modal-body p-4 text-center">
                    {/* Blog Card Preview */}
                    {targetBlog && (
                      <div
                        className="p-3 rounded-3 border mb-3 text-start d-flex align-items-center gap-3"
                        style={{ backgroundColor: "#fffaf7", borderColor: "#f0d5cc" }}
                      >
                        {targetBlog.imgSrc && (
                          <img
                            src={targetBlog.imgSrc}
                            alt=""
                            className="rounded-3 object-fit-cover shadow-sm"
                            style={{ width: "60px", height: "60px", objectFit: "cover" }}
                          />
                        )}
                        <div className="overflow-hidden">
                          <h6
                            className="font-weight-bold text-dark mb-1 text-truncate"
                            style={{ fontFamily: "'Boska-Variable', 'Playfair Display', serif" }}
                          >
                            {targetBlog.title}
                          </h6>
                          <div className="d-flex align-items-center gap-2">
                            <span className="admin-badge-category" style={{ padding: "3px 10px", fontSize: "0.74rem" }}>
                              {targetBlog.category || "Events"}
                            </span>
                            <span className="text-muted small">
                              {targetBlog.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    <p className="text-dark font-weight-medium mb-1">
                      Are you sure you want to delete this blog post?
                    </p>
                    <p className="small text-muted mb-0">
                      This action will remove the article from Firestore and delete its cover image. <strong>This cannot be undone.</strong>
                    </p>
                  </div>

                  <div
                    className="modal-footer border-0 p-3 px-4 d-flex justify-content-end gap-3"
                    style={{ backgroundColor: "#fffaf7" }}
                  >
                    <button
                      type="button"
                      className="admin-btn-secondary"
                      style={{ padding: "8px 20px", fontSize: "0.86rem" }}
                      onClick={() => setDeleteConfirmId(null)}
                      disabled={deleting}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm px-4 d-flex align-items-center gap-2 font-weight-bold shadow-sm"
                      style={{ borderRadius: "50px", padding: "8px 20px" }}
                      disabled={deleting}
                      onClick={() => handleDelete(deleteConfirmId, targetBlog?.imgSrc)}
                    >
                      {deleting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                          <span>Deleting...</span>
                        </>
                      ) : (
                        <>
                          <Trash2 size={15} />
                          <span>Yes, Delete Permanently</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </main>
    </div>
  );
};

export default AdminDashboard;


