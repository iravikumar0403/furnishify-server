const router = require("express").Router();
const { verifyAuthentication } = require("../middleware/verifyAuth");
const Address = require("../models/Address");

router.get("/", verifyAuthentication, async (req, res) => {
  const { id } = req.user;

  try {
    const address = await Address.find({
      userId: id,
    });
    console.log(address);
    res.status(200).json(address);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post("/", verifyAuthentication, async (req, res) => {
  const { address } = req.body;
  const { id } = req.user;
  console.log(address, id);
  try {
    const updatedAddress = await Address.findOneAndUpdate(
      {
        userId: id,
      },
      {
        userId: id,
        address,
      },
      {
        returnDocument: "after",
        upsert: true,
      }
    );
    res.status(200).json(updatedAddress);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
