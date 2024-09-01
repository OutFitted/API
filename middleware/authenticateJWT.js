const { verifyToken } = require("../utils/jwt");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      const decoded = verifyToken(token.split(" ")[1]);
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
  } else {
    return res.status(401).json({ message: "Authorization token required" });
  }
};
