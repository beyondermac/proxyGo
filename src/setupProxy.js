const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "https://api-dev.gospace.com",
      changeOrigin: true,
      secure: false
    })
  );
};
