const router = require("express").Router();
const { verifyAuthentication } = require("../middleware/verifyAuth");
const Cart = require("../models/Cart");

router.get("/", verifyAuthentication, async (req, res) => {
  const { id } = req.user;

  try {
    const cart = await Cart.find({
      userId: id,
    });
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", verifyAuthentication, async (req, res) => {
  const { products } = req.body;
  const { id } = req.user;
  try {
    const updatedCart = await Cart.findOneAndUpdate(
      {
        userId: id,
      },
      {
        userId: id,
        products,
      },
      {
        returnDocument: "after",
        upsert: true,
      }
    );

    res.status(200).json(updatedCart);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
