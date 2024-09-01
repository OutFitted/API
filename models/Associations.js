const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const Category = require('./Category');
const OrderItem = require('./OrderItem');

// Category and Product associations
Category.hasMany(Product, { foreignKey: "categoryId", onDelete: "CASCADE" });
Product.belongsTo(Category, { foreignKey: "categoryId" });

// User and Order associations
User.hasMany(Order, { foreignKey: 'userId', onDelete: 'CASCADE' });
Order.belongsTo(User, { foreignKey: 'userId' });

// Order and OrderItem associations
Order.hasMany(OrderItem, { foreignKey: "orderId", onDelete: "CASCADE" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

// Product and OrderItem associations
Product.hasMany(OrderItem, { foreignKey: "productId", onDelete: "CASCADE" });
OrderItem.belongsTo(Product, { foreignKey: "productId" });

// Example of a many-to-many relationship between Order and Product via OrderItem
Order.belongsToMany(Product, { through: OrderItem, foreignKey: "orderId" });
Product.belongsToMany(Order, { through: OrderItem, foreignKey: "productId" });

// Many-to-many relationship between Order and Product through OrderProducts
Order.belongsToMany(Product, { through: 'OrderProducts', foreignKey: 'orderId' });
Product.belongsToMany(Order, { through: 'OrderProducts', foreignKey: 'productId' });

// Initialize relationships
// If needed, add additional initialization code here

module.exports = { User, Product, Order, Category, OrderItem };

