const kindeAuthExpress = require("@kinde-oss/kinde-node-express-api");

let authenticate;
(async () => {
  authenticate = await kindeAuthExpress(process.env.KINDE_URL);
})();

module.exports = (req, res, next) => {
  /**
   * Main application routes
   */
  req.app.use("/v1", require("./api/v1"));
  req.app.use("/v1/books", authenticate, require("./api/books"));
  next();
};
