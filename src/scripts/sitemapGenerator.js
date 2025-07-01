import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Utility function to generate blog slugs
const generateBlogUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")    // Remove special characters
    .replace(/\s+/g, "-")           // Replace spaces with hyphens
    .replace(/-+/g, "-")            // Remove multiple hyphens
    .replace(/^-+/, "")             // Remove leading hyphens
    .replace(/-+$/, "");            // Remove trailing hyphens
};

// Static blog titles
const blogData = [
  "How Event Decor Can Elevate Your Cultural Celebrations at Home",
  "Challenges and Opportunities in Organizing Events in UAE Public Parks",
  "2025 Event Decor Trends You Need to Know About",
  "Ramadan Event Planning: Organizing Iftar & Suhoor Gatherings with Ease",
  "Behind the Scenes: What It Takes to Plan a Flawless Event",
  "Why Corporate Gifting & Event Branding Matter: Customization Ideas for Memorable Events",
  "Balloon Decor vs. Floral Arrangements: Which One Works Best for Your Event?",
  "Why Celebrate Women Only on Women’s Day? Recognizing Their Strength Every Day",
  "From Majlis to Modern: Styling UAE-Inspired Celebrations at Home",
  "Thriving During Dubai's Summer: Strategic Opportunities for Event Planners",
  "The Rise of Experiential Marketing Events: What Brands Need to Know",
  "How Color Psychology Shapes Guest Perception at Events",
  "Wellness at Events: The New Corporate Trend",
  "Creative Ways to Personalize a Birthday Celebration",
  "Event Storytelling: Creating a Narrative Your Guests Will Remember",
  "Sustainable Event Planning: Eco-Friendly Practices in 2025",
  "5 Small Decor Touches That Make a Big Impact at Home Events",
];

// Gallery categories and image links
const categories = ['All', 'Private Events', 'Corporate Events', 'Rentals', 'Quizzy Beez'];
const galleryImages = [
  "birthdayparties",
  "newbeginnings",
  "weddingsandreception",
  "festivaldecors",
  "corporateretreats",
  "inaguration",
  "academic-celebrations",
  "teambuildingevents",
  "cozyspots",
  "rentals",
];

// ESM-compatible __dirname resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure public directory exists
const publicDir = path.resolve(__dirname, '../../public');
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

// Create sitemap stream
const sitemapPath = path.resolve(publicDir, 'sitemap.xml');
const sitemap = new SitemapStream({ hostname: 'https://www.popandpalmevents.com' });
const writeStream = createWriteStream(sitemapPath);
sitemap.pipe(writeStream);

// 1. Static Routes
['/', '/services', '/blog'].forEach(route => {
  sitemap.write({ url: route, changefreq: 'weekly', priority: 1.0 });
});

// 2. Blog Routes
blogData.forEach(blog => {
  const slug = generateBlogUrl(blog);
  sitemap.write({ url: `/blog/${slug}`, changefreq: 'weekly', priority: 0.9 });
});

// 3. Gallery Categories
categories.forEach(category => {
  sitemap.write({
    url: `/gallery/${encodeURIComponent(category)}`,
    changefreq: 'monthly',
    priority: 0.8,
  });
});

// 4. Gallery Images
galleryImages.forEach(category => {
  sitemap.write({
    url: `/galleryimages/${encodeURIComponent(category)}`,
    changefreq: 'monthly',
    priority: 0.8,
  });
});

// End sitemap stream
sitemap.end();
streamToPromise(sitemap)
  .then(() => {
    console.log(`✅ Sitemap successfully generated at ${sitemapPath}`);
  })
  .catch(console.error);
