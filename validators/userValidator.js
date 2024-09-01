const { param, validationResult } = require("express-validator");

// Validator for user ID in the route parameter
const validateUserId = [
  param("id")
    .isInt({ min: 1 })
    .withMessage("User ID must be a positive integer"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUserId };
