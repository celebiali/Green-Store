const user = require("../models/user.js");
const jwt = require("jsonwebtoken");

const authenticationMid = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.status(500).json({ message: "Lütfen giriş yapınız" });

  const decodedData = jwt.verify(token, "SECRETTOKEN");

  if (!decodedData) return res.status(500).json({ message: "Geçersiz token" });

  req.user = await user.findById(decodedData.id);

  next();
};

const roleChecked = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res
        .status(500)
        .json({ message: "Bu işlemi yapmaya yetkiniz yok" });
    next();
  };
};

module.exports = { authenticationMid, roleChecked };
