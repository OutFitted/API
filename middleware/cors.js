const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:3000", "http://another-example.com"], // Add your front-end domains
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

module.exports = cors(corsOptions);
