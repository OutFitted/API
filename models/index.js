const sequelize = require("../config/db.config");

const Cart = require("./Cart");
const Category = require("./Category");
const Newsletter = require("./Newsletter");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
const Payment = require("./Payment");
const Product = require("./Product");
const Review = require("./Review");
const Subscriber = require("./Subscriber");
const Token = require("./Token");
const User = require("./User");
const Wishlist = require("./Wishlist");

// Import associations to set up relationships
require('./Associations');

// Sync all models
sequelize.sync({ alter: true });

module.exports = {
  Cart,
  Category,
  Newsletter,
  Order,
  OrderItem,
  Payment,
  Product,
  Review,
  Subscriber,
  Token,
  User,
  Wishlist
};
