const Category = require("./Category");
const Product = require("./Product");
const User = require("./User");
const Order = require("./Order");
const OrderItem = require("./OrderItem");

// Associations
Category.hasMany(Product, { foreignKey: "categoryId", onDelete: "CASCADE" });

Order.belongsTo(User, { foreignKey: "userId" });
Order.hasMany(OrderItem, { foreignKey: "orderId", onDelete: "CASCADE" });

OrderItem.belongsTo(Order, { foreignKey: "orderId" });
OrderItem.belongsTo(Product, { foreignKey: "productId" });

Product.belongsTo(Category, { foreignKey: "categoryId" });
Product.hasMany(OrderItem, { foreignKey: "productId", onDelete: "CASCADE" });

User.hasMany(Order, { foreignKey: "userId", onDelete: "CASCADE" });

module.exports = {
  Category,
  Product,
  User,
  Order,
  OrderItem,
};
