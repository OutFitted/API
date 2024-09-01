const express = require('express');
const { authenticateJWT } = require('../middleware/authenticateJWT');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const router = express.Router();

router.get('/profile', authenticateJWT, getUserProfile);
router.put('/profile', authenticateJWT, updateUserProfile);

module.exports = router;
