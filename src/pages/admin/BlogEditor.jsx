import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import AdminNavbar from "../../components/admin/AdminNavbar";
import "../../styles/admin.css";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  uploadBlogImage,
  deleteImageKitFile,
  getBlogById,
} from "../../services/blogService";
import { generateBlogUrl } from "../../utils/blogURLGenerator";
import BlogContent from "../../components/BlogContent";
import {
  Save,
  ArrowLeft,
  Upload,
  Image as ImageIcon,
  Plus,
  Trash2,
  AlertCircle,
  CheckCircle,
  Eye,
  Sparkles,
  X,
  Loader2,
  Bold,
  Italic,
} from "lucide-react";

export const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Event Decor");
  const [author, setAuthor] = useState("Pop & Palm Team");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [existingImageUrl, setExistingImageUrl] = useState("");

  const [sections, setSections] = useState([
    { heading: "Event Highlights", paragraph: "", bullets: "" },
    { heading: "Decor Details & Styling", paragraph: "", bullets: "" },
  ]);

  const [uploadedFileId, setUploadedFileId] = useState(null);
  const [coverImagePreview, setCoverImagePreview] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEditMode);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  // Load existing article if editing
  useEffect(() => {
    if (isEditMode) {
      const loadPost = async () => {
        setFetching(true);
        try {
          const post = await getBlogById(id);
          if (post) {
            setTitle(post.title || "");
            setSlug(post.slug || generateBlogUrl(post.title || ""));
            setDescription(post.description || "");
            setCategory(post.category || "Event Decor");
            setAuthor(post.author || "Pop & Palm Team");
            setExistingImageUrl(post.imageUrl || post.imgSrc || "");
            setCoverImagePreview(post.imageUrl || post.imgSrc || "");
            setUploadedFileId(post.imageKitFileId || post.fileId || null);
            setMetaTitle(post.metaTitle || post.title || "");
            setMetaDescription(post.metaDescription || post.description || "");

            if (post.sections && Array.isArray(post.sections) && post.sections.length > 0) {
              setSections(post.sections);
            } else if (post.content) {
              setSections([{ heading: "Content", paragraph: post.content, bullets: "" }]);
            }
          } else {
            setError("Blog post not found in database.");
          }
        } catch (err) {
          console.error("Error fetching blog post:", err);
          setError("Failed to load blog post.");
        } finally {
          setFetching(false);
        }
      };
      loadPost();
    }
  }, [id, isEditMode]);

  // Auto-generate slug when title changes (unless manually edited in new mode)
  const handleTitleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
    if (!isEditMode) {
      setSlug(generateBlogUrl(val));
      if (!metaTitle) setMetaTitle(val);
    }
  };

  const handleAutoImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setError("Image size exceeds 10MB. Please select a smaller file.");
      return;
    }

    setUploadingImage(true);
    setError("");

    // Show temporary local preview while uploading
    const tempUrl = URL.createObjectURL(file);
    setCoverImagePreview(tempUrl);

    try {
      // If an image was previously auto-uploaded in this editing session, delete it first
      const oldTarget = uploadedFileId || existingImageUrl;
      if (oldTarget) {
        await deleteImageKitFile(oldTarget).catch(() => null);
      }

      const result = await uploadBlogImage(file);
      setExistingImageUrl(result.url);
      setUploadedFileId(result.fileId);
      setCoverImagePreview(result.url);
      setSuccess("Image uploaded to ImageKit successfully!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error("ImageKit auto-upload failed:", err);
      setError(
        err.message ||
          "Failed to upload image to ImageKit. Please check your ImageKit keys in .env.local"
      );
      setCoverImagePreview("");
      setExistingImageUrl("");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleRemoveImage = async () => {
    const target = uploadedFileId || coverImagePreview || existingImageUrl;
    setCoverImagePreview("");
    setExistingImageUrl("");
    setUploadedFileId(null);
    setSuccess("Image removed from ImageKit.");
    setTimeout(() => setSuccess(""), 2500);

    if (target) {
      try {
        await deleteImageKitFile(target);
      } catch (err) {
        console.warn("Could not delete from ImageKit:", err);
      }
    }
  };

  const applyFormattingToSelection = (idx, field, marker, defaultText = "bold text") => {
    const textarea = document.getElementById(`section-${field}-${idx}`);
    const currentVal = sections[idx][field] || "";

    if (!textarea) {
      const addition = `${marker}${defaultText}${marker}`;
      const updated = currentVal ? `${currentVal} ${addition}` : addition;
      updateSection(idx, field, updated);
      return;
    }

    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    const isBold = marker === "**";
    const markerLen = marker.length;

    let selected = currentVal.substring(start, end);

    // Case 1: No selection (cursor placed at a single point)
    if (start === end) {
      // Check if cursor is sitting inside empty markers: e.g. "**|**" or "*|*"
      if (
        isBold &&
        start >= 2 &&
        end + 2 <= currentVal.length &&
        currentVal.slice(start - 2, start) === "**" &&
        currentVal.slice(end, end + 2) === "**"
      ) {
        // Toggle OFF: Remove empty bold markers
        const newVal = currentVal.slice(0, start - 2) + currentVal.slice(end + 2);
        updateSection(idx, field, newVal);
        setTimeout(() => {
          textarea.focus();
          textarea.setSelectionRange(start - 2, start - 2);
        }, 10);
        return;
      }

      if (
        !isBold &&
        start >= 1 &&
        end + 1 <= currentVal.length &&
        currentVal.slice(start - 1, start) === "*" &&
        currentVal.slice(end, end + 1) === "*" &&
        currentVal.slice(start - 2, start - 1) !== "*" &&
        currentVal.slice(end + 1, end + 2) !== "*"
      ) {
        // Toggle OFF: Remove empty italic markers
        const newVal = currentVal.slice(0, start - 1) + currentVal.slice(end + 1);
        updateSection(idx, field, newVal);
        setTimeout(() => {
          textarea.focus();
          textarea.setSelectionRange(start - 1, start - 1);
        }, 10);
        return;
      }

      // If cursor is within a word, expand selection to word boundaries
      const leftText = currentVal.slice(0, start);
      const rightText = currentVal.slice(end);
      const wordLeftMatch = leftText.match(/[\w\-]+$/);
      const wordRightMatch = rightText.match(/^[\w\-]+/);

      if (wordLeftMatch || wordRightMatch) {
        const wordStart = wordLeftMatch ? start - wordLeftMatch[0].length : start;
        const wordEnd = wordRightMatch ? end + wordRightMatch[0].length : end;
        start = wordStart;
        end = wordEnd;
        selected = currentVal.substring(start, end);
      }
    }

    // If still empty (e.g. cursor on empty line/space), insert default template
    if (!selected) {
      const replacement = `${marker}${defaultText}${marker}`;
      const newVal = currentVal.substring(0, start) + replacement + currentVal.substring(end);
      updateSection(idx, field, newVal);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + markerLen, start + markerLen + defaultText.length);
      }, 10);
      return;
    }

    // Case 2: Selected text ITSELF contains the outer markers
    if (isBold) {
      if (selected.startsWith("**") && selected.endsWith("**") && selected.length >= 4) {
        // Toggle OFF: unwrap bold
        const unwrapped = selected.slice(2, -2);
        const newVal = currentVal.substring(0, start) + unwrapped + currentVal.substring(end);
        updateSection(idx, field, newVal);
        setTimeout(() => {
          textarea.focus();
          textarea.setSelectionRange(start, start + unwrapped.length);
        }, 10);
        return;
      }
    } else {
      const startsWithSingleStar = selected.startsWith("*") && !selected.startsWith("**");
      const endsWithSingleStar = selected.endsWith("*") && !selected.endsWith("**");
      const isTripleStar = selected.startsWith("***") && selected.endsWith("***") && selected.length >= 6;

      if (isTripleStar) {
        // Un-italicize from bold+italic: ***text*** -> **text**
        const unwrapped = `**${selected.slice(3, -3)}**`;
        const newVal = currentVal.substring(0, start) + unwrapped + currentVal.substring(end);
        updateSection(idx, field, newVal);
        setTimeout(() => {
          textarea.focus();
          textarea.setSelectionRange(start, start + unwrapped.length);
        }, 10);
        return;
      } else if (startsWithSingleStar && endsWithSingleStar && selected.length >= 2) {
        // Toggle OFF: unwrap italic
        const unwrapped = selected.slice(1, -1);
        const newVal = currentVal.substring(0, start) + unwrapped + currentVal.substring(end);
        updateSection(idx, field, newVal);
        setTimeout(() => {
          textarea.focus();
          textarea.setSelectionRange(start, start + unwrapped.length);
        }, 10);
        return;
      }
    }

    // Case 3: Markers exist IMMEDIATELY OUTSIDE the current selection boundary
    // e.g. text is `**selected**` and user has `selected` highlighted
    if (isBold) {
      const hasOuterBold =
        start >= 2 &&
        end + 2 <= currentVal.length &&
        currentVal.slice(start - 2, start) === "**" &&
        currentVal.slice(end, end + 2) === "**";

      if (hasOuterBold) {
        // Toggle OFF: Remove outer bold markers
        const newVal = currentVal.substring(0, start - 2) + selected + currentVal.substring(end + 2);
        updateSection(idx, field, newVal);
        setTimeout(() => {
          textarea.focus();
          textarea.setSelectionRange(start - 2, start - 2 + selected.length);
        }, 10);
        return;
      }
    } else {
      const hasOuterItalic =
        start >= 1 &&
        end + 1 <= currentVal.length &&
        currentVal.slice(start - 1, start) === "*" &&
        currentVal.slice(end, end + 1) === "*" &&
        currentVal.slice(start - 2, start - 1) !== "*" &&
        currentVal.slice(end + 1, end + 2) !== "*";

      if (hasOuterItalic) {
        // Toggle OFF: Remove outer italic markers
        const newVal = currentVal.substring(0, start - 1) + selected + currentVal.substring(end + 1);
        updateSection(idx, field, newVal);
        setTimeout(() => {
          textarea.focus();
          textarea.setSelectionRange(start - 1, start - 1 + selected.length);
        }, 10);
        return;
      }
    }

    // Case 4: Default - Wrap selection with marker
    const replacement = `${marker}${selected}${marker}`;
    const newVal = currentVal.substring(0, start) + replacement + currentVal.substring(end);
    updateSection(idx, field, newVal);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start, start + replacement.length);
    }, 10);
  };

  // Section builders
  const addSection = () => {
    setSections([...sections, { heading: "", paragraph: "", bullets: "" }]);
  };

  const updateSection = (index, field, value) => {
    const updated = [...sections];
    updated[index][field] = value;
    setSections(updated);
  };

  const removeSection = (index) => {
    if (sections.length <= 1) return;
    setSections(sections.filter((_, i) => i !== index));
  };

  // Smooth error scrolling helper
  const showErrorAndScroll = (msg, targetId = null) => {
    setError(msg);
    setSuccess("");
    setTimeout(() => {
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          if (typeof el.focus === "function") {
            el.focus();
          }
          return;
        }
      }
      const alertEl = document.getElementById("admin-feedback-alert");
      if (alertEl) {
        alertEl.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);
  };

  // Save / Update Post
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setError("");
    setSuccess("");

    if (!title.trim()) {
      showErrorAndScroll("Please provide an article title before publishing.", "admin-input-title");
      return;
    }

    if (!description.trim()) {
      showErrorAndScroll("Please provide a short description or excerpt.", "admin-input-description");
      return;
    }

    const finalImageUrl = coverImagePreview || existingImageUrl;
    if (!finalImageUrl) {
      showErrorAndScroll("Please upload or provide a featured cover image.", "admin-cover-image-card");
      return;
    }

    setLoading(true);

    try {
      const blogData = {
        title: title.trim(),
        slug: slug.trim() || generateBlogUrl(title),
        description: description.trim(),
        category,
        author: author.trim() || "Pop & Palm Team",
        imgSrc: finalImageUrl,
        imageUrl: finalImageUrl,
        imageKitFileId: uploadedFileId,
        metaTitle: metaTitle.trim() || title.trim(),
        metaDescription: metaDescription.trim() || description.trim(),
        sections: sections.filter((s) => s.heading.trim() || s.paragraph.trim() || s.bullets.trim()),
      };

      if (isEditMode) {
        await updateBlog(id, blogData);
        setSuccess("Article updated successfully!");
      } else {
        await createBlog(blogData);
        setSuccess("Article published to live website successfully!");
      }

      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        navigate("/admin");
      }, 1200);
    } catch (err) {
      console.error("Save error:", err);
      showErrorAndScroll(err.message || "Failed to save article. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Delete Post
  const handleDeletePost = async () => {
    if (!id) return;
    setDeleting(true);
    setError("");

    try {
      const targetImage = uploadedFileId || coverImagePreview || existingImageUrl;
      if (targetImage) {
        try {
          await deleteImageKitFile(targetImage);
        } catch (e) {
          console.warn("Could not delete ImageKit file during post deletion", e);
        }
      }
      await deleteBlog(id);
      setShowDeleteModal(false);
      navigate("/admin");
    } catch (err) {
      console.error("Delete error:", err);
      setError(err.message || "Failed to delete article.");
      setShowDeleteModal(false);
    } finally {
      setDeleting(false);
    }
  };

  if (fetching) {
    return (
      <div className="admin-page-wrapper">
        <AdminNavbar />
        <div className="text-center py-5">
          <div
            className="spinner-border"
            role="status"
            style={{ color: "#347440", width: "2.8rem", height: "2.8rem" }}
          ></div>
          <p className="mt-3 text-muted font-weight-medium">Loading article details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page-wrapper">
      <AdminNavbar />

      <main className="admin-container">
        {/* Header Breadcrumbs & Action Bar */}
        <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mb-4 pb-2">
          <div className="d-flex align-items-center gap-3">
            <Link
              to="/admin"
              className="admin-action-btn"
              style={{
                backgroundColor: "#ffffff",
                border: "1.5px solid #e0d0c8",
                color: "#347440",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
              title="Back to Dashboard"
            >
              <ArrowLeft size={18} />
            </Link>
            <div>
              <span className="admin-eyebrow">
                Editorial Workspace
              </span>
              <h1 className="admin-page-title">
                {isEditMode ? "Edit Article" : "Create New Story"}
              </h1>
              <p className="admin-page-subtitle">
                Compose, format, and publish stories for Pop & Palm
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button
              type="button"
              onClick={() => setShowPreviewModal(true)}
              className="admin-btn-secondary d-flex align-items-center gap-1.5"
              title="Preview article formatted like Blog48"
            >
              <Eye size={16} />
              <span>Preview</span>
            </button>
            <Link
              to="/admin"
              className="admin-btn-secondary"
            >
              Cancel
            </Link>
            <button
              onClick={handleSubmit}
              disabled={loading || uploadingImage}
              className="admin-btn-primary"
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save size={17} />
                  <span>{isEditMode ? "Save Changes" : "Publish Article"}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Feedback Alerts */}
        {error && (
          <div
            id="admin-feedback-alert"
            className="alert alert-danger d-flex align-items-center gap-2 mb-4 border-0 shadow-sm"
            role="alert"
            style={{ borderRadius: "14px", padding: "16px 20px", backgroundColor: "#fdf2f2", color: "#9b1c1c" }}
          >
            <AlertCircle size={20} className="shrink-0" />
            <span className="font-weight-medium">{error}</span>
          </div>
        )}

        {success && (
          <div
            className="alert alert-success d-flex align-items-center gap-2 mb-4 border-0 shadow-sm"
            role="alert"
            style={{ borderRadius: "14px", padding: "16px 20px", backgroundColor: "#e8f5e9", color: "#2e7d32" }}
          >
            <CheckCircle size={20} />
            <span className="font-weight-medium">{success}</span>
          </div>
        )}

        {/* Form Container Grid */}
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            {/* Left Column: Main Content */}
            <div className="col-12 col-lg-8">
              {/* Card 1: Essential Info */}
              <div className="admin-card">
                <h5 className="admin-card-header-title">
                  1. Article Overview
                </h5>

                {/* Title */}
                <div className="admin-form-group">
                  <label className="admin-label">
                    <span>Article Title <span className="text-danger">*</span></span>
                  </label>
                  <input
                    id="admin-input-title"
                    type="text"
                    className="admin-input admin-input-title"
                    placeholder="e.g. Modern Balloon Styling Ideas for Luxury Events"
                    required
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>

                {/* Slug */}
                <div className="admin-form-group">
                  <label className="admin-label text-muted small" style={{ fontWeight: 500 }}>
                    URL Slug (Website Address)
                  </label>
                  <div className="input-group">
                    <span
                      className="input-group-text"
                      style={{
                        backgroundColor: "#fffaf7",
                        borderColor: "#e8d5cc",
                        borderRight: "none",
                        color: "#777777",
                        borderRadius: "12px 0 0 12px",
                        padding: "10px 14px",
                        fontSize: "0.9rem",
                      }}
                    >
                      /blog/
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
                        fontSize: "0.9rem",
                        color: "#555555",
                        boxShadow: "none",
                      }}
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                    />
                  </div>
                </div>

                {/* Short Excerpt / Description */}
                <div className="admin-form-group">
                  <label className="admin-label">
                    <span>Short Excerpt / Card Description <span className="text-danger">*</span></span>
                  </label>
                  <textarea
                    id="admin-input-description"
                    rows={3}
                    className="admin-textarea"
                    placeholder="Brief summary displayed on the blog card and social previews..."
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              {/* Card 2: Section-Based Content Builder */}
              <div className="admin-card">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="admin-card-header-title mb-0">
                    2. Article Sections & Content
                  </h5>
                  <button
                    type="button"
                    onClick={addSection}
                    className="admin-btn-pill-green"
                  >
                    <Plus size={15} />
                    <span>Add Section</span>
                  </button>
                </div>

                <p className="text-muted small mb-4" style={{ lineHeight: 1.5 }}>
                  Write your story with structured sections, custom headings, paragraphs, and formatted bullet points.
                </p>

                {sections.map((sec, idx) => (
                  <div
                    key={idx}
                    className="admin-section-item"
                  >
                    <div className="admin-section-header">
                      <span className="admin-section-badge">
                        Section {idx + 1}
                      </span>
                      {sections.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSection(idx)}
                          className="admin-action-btn"
                          style={{
                            width: "30px",
                            height: "30px",
                            color: "#dc3545",
                            backgroundColor: "#fff5f5",
                            border: "1px solid rgba(220, 53, 69, 0.2)",
                          }}
                          title="Remove Section"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>

                    {/* Section Heading */}
                    <div className="admin-form-group">
                      <input
                        type="text"
                        className="admin-input"
                        style={{
                          fontFamily: "'Boska-Variable', 'Playfair Display', serif",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          backgroundColor: "#ffffff",
                        }}
                        placeholder="Section Heading (e.g. Choose The Right Color Palette)"
                        value={sec.heading}
                        onChange={(e) => updateSection(idx, "heading", e.target.value)}
                      />
                    </div>

                    {/* Paragraph Content with Format Toolbar */}
                    <div className="admin-form-group">
                      <div className="admin-label">
                        <span className="text-muted small" style={{ fontWeight: 600 }}>Paragraph Content</span>
                        <div className="admin-toolbar-group">
                          <button
                            type="button"
                            onClick={() => applyFormattingToSelection(idx, "paragraph", "**", "bold text")}
                            className="admin-btn-format"
                            title="Highlight text and click Bold"
                          >
                            <Bold size={13} />
                            <span>Bold</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => applyFormattingToSelection(idx, "paragraph", "*", "italic text")}
                            className="admin-btn-format"
                            title="Highlight text and click Italic"
                          >
                            <Italic size={13} />
                            <span>Italic</span>
                          </button>
                        </div>
                      </div>
                      <textarea
                        id={`section-paragraph-${idx}`}
                        rows={4}
                        className="admin-textarea"
                        style={{
                          backgroundColor: "#ffffff",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "1rem",
                          lineHeight: "1.7",
                        }}
                        placeholder="Type paragraph content... (Highlight words & click Bold, or type **word** to make bold)"
                        value={sec.paragraph}
                        onChange={(e) => updateSection(idx, "paragraph", e.target.value)}
                      />
                    </div>

                    {/* Bullet points with Format Toolbar */}
                    <div className="admin-form-group">
                      <div className="admin-label">
                        <span className="text-muted small" style={{ fontWeight: 600 }}>Bullet Points (1 per line)</span>
                        <div className="admin-toolbar-group">
                          <button
                            type="button"
                            onClick={() => applyFormattingToSelection(idx, "bullets", "**", "bold item")}
                            className="admin-btn-format"
                            title="Highlight text and click Bold"
                          >
                            <Bold size={12} />
                            <span>Bold</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => applyFormattingToSelection(idx, "bullets", "*", "italic item")}
                            className="admin-btn-format"
                            title="Highlight text and click Italic"
                          >
                            <Italic size={12} />
                            <span>Italic</span>
                          </button>
                        </div>
                      </div>
                      <textarea
                        id={`section-bullets-${idx}`}
                        rows={3}
                        className="admin-textarea"
                        style={{ backgroundColor: "#ffffff" }}
                        placeholder="e.g. **Custom Props:** Designed exclusively for your theme"
                        value={sec.bullets}
                        onChange={(e) => updateSection(idx, "bullets", e.target.value)}
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addSection}
                  className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                  style={{
                    backgroundColor: "#fffaf7",
                    border: "2px dashed #ffc3ab",
                    borderRadius: "16px",
                    color: "#347440",
                    fontWeight: 600,
                    padding: "14px 20px",
                    fontSize: "0.92rem",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Plus size={17} />
                  <span>Add Another Section</span>
                </button>
              </div>

              {/* Card 3: SEO Metadata */}
              <div className="admin-card">
                <h5 className="admin-card-header-title">
                  <Sparkles size={16} style={{ color: "#daa547" }} />
                  <span>3. Search Engine Optimization (SEO)</span>
                </h5>

                <div className="admin-form-group">
                  <label className="admin-label text-muted small" style={{ fontWeight: 600 }}>SEO Meta Title</label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="Meta Title for Google search results..."
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label text-muted small" style={{ fontWeight: 600 }}>SEO Meta Description</label>
                  <textarea
                    rows={2}
                    className="admin-textarea"
                    placeholder="Short description snippet under 160 characters..."
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Media & Sidebar Settings */}
            <div className="col-12 col-lg-4">
              <div className="admin-sticky-sidebar">
                {/* Cover Image Upload Card */}
                <div id="admin-cover-image-card" className="admin-card">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="admin-card-header-title mb-0">
                      Cover Image <span className="text-danger">*</span>
                    </h5>
                    {coverImagePreview && !uploadingImage && (
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="admin-btn-danger-pill"
                        title="Remove image from ImageKit"
                      >
                        <Trash2 size={13} />
                        <span>Remove from ImageKit</span>
                      </button>
                    )}
                  </div>

                  {/* Preview Box */}
                  <div className="admin-image-dropzone">
                    {uploadingImage ? (
                      <div className="py-4 text-center">
                        <span
                          className="spinner-border spinner-border-sm mb-2"
                          role="status"
                          style={{ color: "#347440" }}
                        ></span>
                        <p className="small font-weight-semibold mb-0 text-dark">
                          Uploading to ImageKit...
                        </p>
                        <small className="text-muted text-xs">Optimizing on global CDN</small>
                      </div>
                    ) : coverImagePreview ? (
                      <div className="position-relative w-100">
                        <img
                          src={coverImagePreview}
                          alt="Cover Preview"
                          className="img-fluid rounded-3 shadow-sm w-100"
                          style={{ maxHeight: "230px", objectFit: "cover" }}
                        />
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 rounded-circle p-1 shadow"
                          title="Remove from ImageKit"
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div className="py-4 text-center text-muted">
                        <ImageIcon size={38} className="mb-2 opacity-50" style={{ color: "#347440" }} />
                        <p className="small mb-1 text-dark font-weight-semibold">No image selected</p>
                        <small className="text-muted text-xs">Select an image file below to auto-upload</small>
                      </div>
                    )}
                  </div>

                  {/* File Input */}
                  <div className="mb-3">
                    <label
                      className={`admin-btn-primary w-100 cursor-pointer ${
                        uploadingImage ? "disabled opacity-50" : ""
                      }`}
                      style={{ padding: "12px 18px", fontSize: "0.9rem" }}
                    >
                      <Upload size={16} />
                      <span>{coverImagePreview ? "Change Cover Image" : "Upload Image to ImageKit"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="d-none"
                        disabled={uploadingImage}
                        onChange={handleAutoImageUpload}
                      />
                    </label>
                  </div>

                  {/* Direct Image URL input */}
                  <div className="pt-3 border-top" style={{ borderColor: "#f0d5cc" }}>
                    <label className="admin-label text-muted small" style={{ fontWeight: 500 }}>
                      Or paste Image URL directly:
                    </label>
                    <input
                      type="url"
                      className="admin-input"
                      style={{ padding: "9px 14px", fontSize: "0.88rem" }}
                      placeholder="https://example.com/image.jpg"
                      value={existingImageUrl}
                      onChange={(e) => {
                        setExistingImageUrl(e.target.value);
                        setCoverImagePreview(e.target.value);
                        setUploadedFileId(null);
                      }}
                    />
                  </div>
                  <small className="text-muted text-xs d-block mt-2">
                    ⚡ Auto-uploads to ImageKit upon selection and deletes instantly when removed.
                  </small>
                </div>

                {/* Publishing Details Card */}
                <div className="admin-card">
                  <h5 className="admin-card-header-title">
                    Publishing Details
                  </h5>

                  {/* Category */}
                  <div className="admin-form-group">
                    <label className="admin-label">
                      <span>Category</span>
                    </label>
                    <select
                      className="admin-select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="Event Decor">Event Decor</option>
                      <option value="Cultural Celebrations">Cultural Celebrations</option>
                      <option value="Ramadan & Iftar">Ramadan & Iftar</option>
                      <option value="Corporate Events">Corporate Events</option>
                      <option value="Floral & Balloons">Floral & Balloons</option>
                      <option value="Weddings & Parties">Weddings & Parties</option>
                    </select>
                  </div>

                  {/* Author */}
                  <div className="admin-form-group">
                    <label className="admin-label">
                      <span>Author</span>
                    </label>
                    <input
                      type="text"
                      className="admin-input"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="admin-card p-3">
                  {error && (
                    <div
                      className="alert alert-danger d-flex align-items-start gap-2 mb-3 border-0 p-2.5 small shadow-sm"
                      style={{ borderRadius: "12px", backgroundColor: "#fdf2f2", color: "#9b1c1c", fontSize: "0.86rem" }}
                    >
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <span className="font-weight-medium">{error}</span>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={loading || uploadingImage || deleting}
                    className="admin-btn-primary w-100"
                    style={{ padding: "14px 24px", fontSize: "1rem" }}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span>Saving Article...</span>
                      </>
                    ) : (
                      <>
                        <Save size={18} />
                        <span>{isEditMode ? "Save Changes" : "Publish to Live Site"}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Delete Button (Available in Edit Mode) */}
                {isEditMode && (
                  <div className="admin-card p-3 text-center">
                    <button
                      type="button"
                      disabled={loading || deleting}
                      onClick={() => setShowDeleteModal(true)}
                      className="admin-btn-danger-outline w-100"
                    >
                      <Trash2 size={16} />
                      <span>Delete Blog Post</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
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
                    onClick={() => setShowDeleteModal(false)}
                    disabled={deleting}
                  />
                </div>

                <div className="modal-body p-4 text-center">
                  <div
                    className="p-3 rounded-3 border mb-3 text-start d-flex align-items-center gap-3"
                    style={{ backgroundColor: "#fffaf7", borderColor: "#f0d5cc" }}
                  >
                    {coverImagePreview && (
                      <img
                        src={coverImagePreview}
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
                        {title || "Untitled Blog"}
                      </h6>
                      <span className="admin-badge-category" style={{ padding: "3px 10px", fontSize: "0.74rem" }}>
                        {category}
                      </span>
                    </div>
                  </div>

                  <p className="text-dark font-weight-medium mb-1">
                    Are you sure you want to delete this blog post?
                  </p>
                  <p className="small text-muted mb-0">
                    This will delete the post from Firestore and remove its cover image. <strong>This action cannot be undone.</strong>
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
                    onClick={() => setShowDeleteModal(false)}
                    disabled={deleting}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm px-4 d-flex align-items-center gap-2 font-weight-bold shadow-sm"
                    style={{ borderRadius: "50px", padding: "8px 20px" }}
                    disabled={deleting}
                    onClick={handleDeletePost}
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
        )}
        {/* Live Article Preview Modal */}
        {showPreviewModal && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)", zIndex: 1070 }}
          >
            <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: "900px" }}>
              <div
                className="modal-content border-0 shadow-2xl overflow-hidden"
                style={{ borderRadius: "24px", border: "1px solid #f0d5cc", maxHeight: "90vh" }}
              >
                <div
                  className="modal-header p-3 px-4 border-0 d-flex justify-content-between align-items-center"
                  style={{ backgroundColor: "#347440", color: "#ffffff" }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <Eye size={20} />
                    <h5 className="modal-title font-weight-bold h6 mb-0 text-white">
                      Live Article Preview (Blog48 Typography & Size)
                    </h5>
                  </div>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setShowPreviewModal(false)}
                  />
                </div>

                <div className="modal-body p-4 p-md-5 overflow-auto" style={{ backgroundColor: "#ffffff" }}>
                  <div className="blog" style={{ marginTop: 0, padding: 0 }}>
                    <BlogContent
                      blog={{
                        title: title || "Your Story Title",
                        imgSrc: coverImagePreview || existingImageUrl || "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
                        sections,
                        description,
                      }}
                    />
                  </div>
                </div>

                <div
                  className="modal-footer border-0 p-3 px-4 d-flex justify-content-between"
                  style={{ backgroundColor: "#fffaf7" }}
                >
                  <small className="text-muted">
                    Typography: <strong>Boska-Variable</strong> headings & <strong>20px Poppins</strong> text
                  </small>
                  <button
                    type="button"
                    className="admin-btn-primary"
                    style={{ padding: "8px 22px", fontSize: "0.88rem" }}
                    onClick={() => setShowPreviewModal(false)}
                  >
                    Done Previewing
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogEditor;
