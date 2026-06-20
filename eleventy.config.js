export default function(eleventyConfig) {
  // Ensure your assets (CSS, images, etc.) are copied to the build folder
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};