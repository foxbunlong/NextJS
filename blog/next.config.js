const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  images: {
    loader: "imgix",
    path: "http://localhost:3000/",
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/posts/ssg-ssr": {
        page: "/posts/[id]",
        query: { title: "ssg-ssr" },
      },
    };
  },
});
