import { DateTime } from "luxon";

export default function(eleventyConfig) {
  // Ensure your assets (CSS, images, etc.) are copied to the build folder
  eleventyConfig.addPassthroughCopy("src/assets");

  // Format dates for display
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    const d = typeof dateObj === "string" ? new Date(dateObj) : dateObj;
    return DateTime.fromJSDate(d, { zone: "utc" }).toFormat("LLL dd, yyyy");
  });

  // Limit array items
  eleventyConfig.addFilter("limit", (array, limit) => {
    if (!Array.isArray(array)) return [];
    return array.slice(0, limit);
  });

  // Strip HTML tags for note excerpts
  eleventyConfig.addFilter("stripHtml", (content) => {
    if (typeof content !== "string") return "";
    return content.replace(/<[^>]*>/g, "");
  });

  // Collections
  eleventyConfig.addCollection("writing", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/writing/**/*.md")
      .filter(item => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("notes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/notes/**/*.md")
      .filter(item => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/**/*.md")
      .filter(item => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => b.date - a.date);
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};