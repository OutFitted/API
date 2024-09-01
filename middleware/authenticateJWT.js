const { verifyToken } = require("../utils/jwt");
const { logger } = require('../middleware/logger');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      logger.info("Start token validation");
      const decoded = verifyToken(token.split(" ")[1]);
      req.user = decoded;
      logger.info(`User data extracted from token: ${decoded}`);
      logger.info("Token validation completed successfully");
      next();
    } catch (err) {
      logger.error("Invalid or expired token");
      return res.status(403).json({ message: "Invalid or expired token" });
    }
  } else {
    logger.error("Authorization token required");
    return res.status(401).json({ message: "Authorization token required" });
  }
};
