const router = require("express").Router();
const { verifyAuthentication } = require("../middleware/verifyAuth");
const Wishlist = require("../models/Wishlist");

router.get("/", verifyAuthentication, async (req, res) => {
  const { id } = req.user;
  try {
    const wishlist = await Wishlist.find({
      userId: id,
    });

    res.status(200).json(wishlist);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", verifyAuthentication, async (req, res) => {
  const { products } = req.body;
  const { id } = req.user;
  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      {
        userId: id,
      },
      {
        userId: id,
        products,
      },
      {
        returnDocument: "after",
        upsert: "true",
      }
    );

    res.status(200).json(wishlist);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
