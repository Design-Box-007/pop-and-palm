const formatToHyphenated = (str = "") => {
  if (typeof str !== "string") return "";

  return str
    .trim()
    .replace(/[^a-zA-Z0-9\s]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Collapse multiple hyphens
    .toLowerCase();
};

export default formatToHyphenated;
