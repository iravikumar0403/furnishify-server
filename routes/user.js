const { verifyAuthentication } = require("../middleware/verifyAuth");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const router = require("express").Router();

// Update
router.put("/:id", verifyAuthentication, async (req, res) => {
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(
      req.body.password,
      parseInt(process.env.SALT_ROUNDS)
    );
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
