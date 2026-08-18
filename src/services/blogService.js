import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { blogData as staticBlogs } from "../data/blogsData";
import { generateBlogUrl } from "../utils/blogURLGenerator";

const BLOGS_COLLECTION = "blogs";

/**
 * Upload an image file to ImageKit and return its high-speed CDN URL and fileId.
 */
export const uploadBlogImage = async (file) => {
  if (!file) return null;

  const privateKey = import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY;
  const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;

  if (!privateKey && !publicKey) {
    throw new Error(
      "ImageKit keys are missing. Please add VITE_IMAGEKIT_PRIVATE_KEY (or Public Key) to your .env.local file."
    );
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "fileName",
    `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`
  );
  formData.append("folder", "/pop-and-palm/blogs");
  formData.append("useUniqueFileName", "true");

  const response = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa((privateKey || publicKey || "") + ":")}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(
      errData.message ||
        `ImageKit upload failed with HTTP status ${response.status}. Please verify your ImageKit keys.`
    );
  }

  const result = await response.json();
  return {
    url: result.url,
    fileId: result.fileId,
  };
};

/**
 * Delete an image file from ImageKit by its fileId or CDN URL.
 */
export const deleteImageKitFile = async (fileIdOrUrl) => {
  if (!fileIdOrUrl) return false;

  const privateKey = import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY;
  if (!privateKey) {
    console.warn("VITE_IMAGEKIT_PRIVATE_KEY required to delete from ImageKit");
    return false;
  }

  const authHeader = `Basic ${btoa(privateKey + ":")}`;
  let targetFileId = fileIdOrUrl;

  try {
    // If a full URL is passed instead of a fileId, look up the fileId from ImageKit
    if (typeof fileIdOrUrl === "string" && (fileIdOrUrl.startsWith("http://") || fileIdOrUrl.startsWith("https://"))) {
      try {
        const urlObj = new URL(fileIdOrUrl);
        const pathParts = urlObj.pathname.split("/");
        const rawFileName = pathParts[pathParts.length - 1];

        if (rawFileName) {
          const searchEndpoint = `/api/imagekit/files?name=${encodeURIComponent(rawFileName)}`;
          const searchRes = await fetch(searchEndpoint, {
            headers: { Authorization: authHeader },
          }).catch(() => null);

          if (searchRes && searchRes.ok) {
            const fileList = await searchRes.json();
            if (Array.isArray(fileList) && fileList.length > 0 && fileList[0].fileId) {
              targetFileId = fileList[0].fileId;
            }
          }
        }
      } catch (e) {
        console.warn("Could not parse image URL for ImageKit fileId lookup:", e);
      }
    }

    // Attempt deletion via local proxy first, or fallback to direct ImageKit API
    let response = await fetch(`/api/imagekit/files/${targetFileId}`, {
      method: "DELETE",
      headers: {
        Authorization: authHeader,
      },
    }).catch(() => null);

    if (!response || !response.ok) {
      response = await fetch(`https://api.imagekit.io/v1/files/${targetFileId}`, {
        method: "DELETE",
        headers: {
          Authorization: authHeader,
        },
      }).catch(() => null);
    }

    return response ? (response.status === 204 || response.status === 200 || response.ok) : false;
  } catch (err) {
    console.warn("Error deleting file from ImageKit:", err);
    return false;
  }
};

/**
 * Fetch all dynamic blogs from Firestore.
 */
export const getDynamicBlogs = async () => {
  try {
    const q = query(
      collection(db, BLOGS_COLLECTION),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        isDynamic: true,
        title: data.title || "",
        description: data.description || data.excerpt || "",
        imgSrc: data.imageUrl || data.imgSrc || "",
        category: data.category || "Events",
        author: data.author || "Pop & Palm Team",
        date: data.date || (data.createdAt?.toDate ? data.createdAt.toDate().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Recent"),
        content: data.content || "",
        sections: data.sections || [],
        metaTitle: data.metaTitle || data.title,
        metaDescription: data.metaDescription || data.description,
        slug: data.slug || generateBlogUrl(data.title || ""),
      };
    });
  } catch (error) {
    console.warn("Could not fetch dynamic blogs from Firestore (using static fallback):", error);
    return [];
  }
};

/**
 * Get all blogs combined (Dynamic from Firestore + Static Base Data).
 */
export const getAllBlogs = async () => {
  const dynamicList = await getDynamicBlogs();
  
  // Format static blogs and reverse them so the latest articles appear first (as originally designed)
  const formattedStatic = [...staticBlogs].reverse().map((b, idx) => ({
    id: `static-${idx}`,
    isDynamic: false,
    title: b.title,
    description: b.description,
    imgSrc: b.imgSrc,
    category: "Event Decor",
    author: "Pop & Palm Team",
    date: "2025",
    blogContent: b.blogContent,
    slug: generateBlogUrl(b.title),
  }));

  // Dynamic blogs appear at the very top (most recent first), followed by reversed static blogs
  return [...dynamicList, ...formattedStatic];
};

/**
 * Get a single blog by its URL slug.
 */
export const getBlogBySlug = async (slug) => {
  if (!slug) return null;

  // 1. Try to find in Firestore dynamic blogs
  try {
    const dynamicList = await getDynamicBlogs();
    const dynamicMatch = dynamicList.find(
      (b) => b.slug === slug || generateBlogUrl(b.title) === slug
    );
    if (dynamicMatch) return dynamicMatch;
  } catch (err) {
    console.error("Error matching dynamic blog:", err);
  }

  // 2. Fallback to static blogs
  const staticMatch = staticBlogs.find(
    (b) => generateBlogUrl(b.title) === slug
  );
  if (staticMatch) {
    return {
      id: `static-${slug}`,
      isDynamic: false,
      title: staticMatch.title,
      description: staticMatch.description,
      imgSrc: staticMatch.imgSrc,
      category: "Event Decor",
      blogContent: staticMatch.blogContent,
      slug: generateBlogUrl(staticMatch.title),
    };
  }

  return null;
};

/**
 * Get single blog by Firestore doc ID.
 */
export const getBlogById = async (id) => {
  const docRef = doc(db, BLOGS_COLLECTION, id);
  const snap = await getDoc(docRef);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
};

/**
 * Create a new dynamic blog post.
 */
export const createBlog = async (blogData, imageFile) => {
  let imageUrl = blogData.imageUrl || "";
  let imageKitFileId = blogData.imageKitFileId || blogData.fileId || null;

  if (imageFile) {
    const uploadRes = await uploadBlogImage(imageFile);
    if (uploadRes) {
      imageUrl = uploadRes.url;
      imageKitFileId = uploadRes.fileId;
    }
  }

  const slug = generateBlogUrl(blogData.title || "");

  const payload = {
    title: blogData.title,
    slug,
    description: blogData.description,
    category: blogData.category || "Events",
    author: blogData.author || "Pop & Palm Team",
    imageUrl,
    imageKitFileId,
    content: blogData.content || "",
    sections: blogData.sections || [],
    metaTitle: blogData.metaTitle || blogData.title,
    metaDescription: blogData.metaDescription || blogData.description,
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, BLOGS_COLLECTION), payload);
  return { id: docRef.id, ...payload };
};

/**
 * Update an existing dynamic blog post.
 */
export const updateBlog = async (id, blogData, newImageFile) => {
  let imageUrl = blogData.imageUrl;
  let imageKitFileId = blogData.imageKitFileId || blogData.fileId || null;

  if (newImageFile) {
    const uploadRes = await uploadBlogImage(newImageFile);
    if (uploadRes) {
      imageUrl = uploadRes.url;
      imageKitFileId = uploadRes.fileId;
    }
  }

  const slug = generateBlogUrl(blogData.title || "");

  const payload = {
    title: blogData.title,
    slug,
    description: blogData.description,
    category: blogData.category || "Events",
    author: blogData.author || "Pop & Palm Team",
    imageUrl,
    imageKitFileId,
    content: blogData.content || "",
    sections: blogData.sections || [],
    metaTitle: blogData.metaTitle || blogData.title,
    metaDescription: blogData.metaDescription || blogData.description,
    updatedAt: serverTimestamp(),
  };

  const docRef = doc(db, BLOGS_COLLECTION, id);
  await updateDoc(docRef, payload);
  return { id, ...payload };
};

/**
 * Delete a dynamic blog post.
 */
export const deleteBlog = async (id) => {
  // Delete Firestore document
  const docRef = doc(db, BLOGS_COLLECTION, id);
  await deleteDoc(docRef);
  return true;
};
