import { DateTime } from "luxon";
import sharp from "sharp";
import fs from "fs";
import path from "path";

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

  // Watermark Photographs in build output directory after build completes
  eleventyConfig.on("eleventy.after", async ({ dir }) => {
    const photosDir = path.join(dir.output, "assets/photos");
    if (!fs.existsSync(photosDir)) return;

    const files = fs.readdirSync(photosDir);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) continue;

      const filePath = path.join(photosDir, file);
      try {
        const image = sharp(filePath);
        const metadata = await image.metadata();
        const { width, height } = metadata;
        if (!width || !height) continue;

        // Calculate responsive sizing (font size is ~1.5% of image width for a smaller, cleaner footprint)
        const fontSize = Math.max(12, Math.round(width * 0.015));
        const text = "// ravi-e.com";
        
        // JetBrains Mono / monospace char width ratio is roughly 0.6
        const charWidth = fontSize * 0.6;
        const textWidth = Math.round(text.length * charWidth);
        const textHeight = fontSize;

        const paddingX = Math.round(fontSize * 0.8);
        const paddingY = Math.round(fontSize * 0.5);

        const pillWidth = textWidth + paddingX * 2;
        const pillHeight = textHeight + paddingY * 2;
        const margin = Math.max(16, Math.round(width * 0.018));

        // Use absolute coordinates instead of percentages for better librsvg compatibility
        const centerX = Math.round(pillWidth / 2);
        const centerY = Math.round(pillHeight / 2 + fontSize * 0.12);

        const svgOverlay = Buffer.from(`
          <svg width="${pillWidth}" height="${pillHeight}" xmlns="http://www.w3.org/2000/svg">
            <!-- Liquid glass style backdrop with a thin, glossy border and low opacity fill -->
            <rect x="0.5" y="0.5" width="${pillWidth - 1}" height="${pillHeight - 1}" 
                  rx="${Math.round(fontSize * 0.3)}" 
                  fill="rgba(15, 15, 15, 0.4)" 
                  stroke="rgba(255, 255, 255, 0.18)" 
                  stroke-width="1" />
            <text x="${centerX}" y="${centerY}" 
                  font-family="'JetBrains Mono', 'Courier New', Courier, monospace" 
                  font-size="${fontSize}px" 
                  fill="rgba(255, 255, 255, 0.85)" 
                  text-anchor="middle" 
                  dominant-baseline="middle"
                  font-weight="bold"
                  letter-spacing="0.05em"
            >${text}</text>
          </svg>
        `);

        const tempPath = filePath + ".tmp";
        await image
          .composite([
            {
              input: svgOverlay,
              top: height - pillHeight - margin,
              left: width - pillWidth - margin,
            }
          ])
          .toFile(tempPath);

        fs.renameSync(tempPath, filePath);
        console.log(`[Watermark] Successfully applied to output: assets/photos/${file} (${width}x${height})`);
      } catch (err) {
        console.error(`[Watermark Error] Failed to process ${file}:`, err);
      }
    }
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};