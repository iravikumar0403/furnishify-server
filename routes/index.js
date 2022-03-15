const apiRouter = require("express").Router();
const authRoute = require("./auth");
const userRoute = require("./user");
const productRoute = require("./product");
const cartRoute = require("./cart");
const wishlistRoute = require("./wishlist");
const addressRoute = require("./address");

apiRouter.get("/", (req, res) => {
  res.send("documentation will be added here soon");
});

apiRouter.use("/auth", authRoute);
apiRouter.use("/user", userRoute);
apiRouter.use("/products", productRoute);
apiRouter.use("/cart", cartRoute);
apiRouter.use("/wishlist", wishlistRoute);
apiRouter.use("/address", addressRoute);

module.exports = apiRouter;
