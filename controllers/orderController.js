const orderService = require('../services/orderService');

const createOrder = async (req, res, next) => {
    try {
        const order = await orderService.createOrder(req.user.id, req.body);
        res.status(201).json({ order });
    } catch (err) {
        next(err);
    }
};

const getUserOrders = async (req, res, next) => {
    try {
        const orders = await orderService.getUserOrders(req.user.id);
        res.status(200).json({ orders });
    } catch (err) {
        next(err);
    }
};

const updateOrderStatus = async (req, res, next) => {
    try {
        const order = await orderService.updateOrderStatus(req.params.id, req.body.status);
        res.status(200).json({ order });
    } catch (err) {
        next(err);
    }
};

module.exports = { createOrder, getUserOrders, updateOrderStatus };
