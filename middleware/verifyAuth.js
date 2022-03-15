const jwt = require("jsonwebtoken");

const verifyAuthentication = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        res.status(401).json({
          message: "Authentication required",
        });
        console.log(err);
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "Authentication required",
    });
  }
};

module.exports = { verifyAuthentication };
