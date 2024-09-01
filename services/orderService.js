const { Order, Product, User } = require('../models');

const createOrder = async (userId, orderData) => {
    const order = await Order.create({ userId, ...orderData });
    return order;
};

const getUserOrders = async (userId) => {
    return await Order.findAll({ where: { userId }, include: ['products'] });
};

const updateOrderStatus = async (orderId, status) => {
    const order = await Order.findByPk(orderId);
    if (order) {
        await order.update({ status });
        return order;
    }
    throw new Error('Order not found');
};

module.exports = { createOrder, getUserOrders, updateOrderStatus };
