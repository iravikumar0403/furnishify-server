const apiRouter = require("express").Router();
const authRoute = require("./auth");
const userRoute = require("./user");
const productRoute = require("./product");
const cartRoute = require("./cart");
const wishlistRoute = require("./wishlist");

apiRouter.get("/", (req, res) => {
  res.send("documentation will be added here soon");
});

apiRouter.use("/auth", authRoute);
apiRouter.use("/user", userRoute);
apiRouter.use("/products", productRoute);
apiRouter.use("/cart", cartRoute);
apiRouter.use("/wishlist", wishlistRoute);

module.exports = apiRouter;
