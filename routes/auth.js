const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!(name && email && password)) {
    res.status(400).json({
      message: "incomplete information",
    });
  }

  const encryptedPassword = bcrypt.hashSync(
    password,
    parseInt(process.env.SALT_ROUNDS)
  );

  const newUser = User({
    name: name,
    email: email,
    password: encryptedPassword,
  });

  try {
    const user = await newUser.save();
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SEC,
      { expiresIn: "24h" }
    );
    res.status(201).json({
      token: token,
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
      wishlist: user.wishlist,
      cart: user.cart,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    res.status(400).json({
      message: "incomplete information",
    });
  }

  const user = await User.findOne({
    email: email,
  });

  !user &&
    res.status(401).json({
      message: "invalid credentials",
    });

  const result = await bcrypt.compare(password, user.password);

  if (result) {
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SEC,
      { expiresIn: "2h" }
    );
    res.status(200).json({
      token: token,
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
      wishlist: user.wishlist,
      cart: user.cart,
    });
  } else {
    res.status(401).json({
      message: "invalid credentials",
    });
  }
});

module.exports = router;
