const express = require('express');
const { authenticateJWT } = require('../middleware/authenticateJWT');
const { createOrder, getUserOrders, updateOrderStatus } = require('../controllers/orderController');
const router = express.Router();

router.post('/', authenticateJWT, createOrder);
router.get('/', authenticateJWT, getUserOrders);
router.put('/:id', authenticateJWT, updateOrderStatus);

module.exports = router;
