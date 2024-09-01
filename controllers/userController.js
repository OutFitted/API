const userService = require('../services/userService');
const { logger } = require('../middleware/logger');

const getUserProfile = async (req, res, next) => {
    const userId = req.params.id;
    try {
        logger.info(`User profile retrieved for user ${userId}`);
        const user = await userService.getUserProfile(userId);
        
        const { password, ...userWithoutPassword } = user;
        logger.info("User retrieved successfully");
        res.status(200).json({ user: userWithoutPassword });
    } catch (err) {
        logger.error("User retrieved failed");
        next(err);
    }
};

const updateUserProfile = async (req, res, next) => {
    const userId = req.params.id;
    try {
        logger.info(`User profile updated for user ${userId}`);
        const user = await userService.updateUserProfile(userId, req.body);
        logger.info("User profile updated successfully");
        const { password, ...userWithoutPassword } = user;
        res.status(200).json({ user: userWithoutPassword });
    } catch (err) {
        logger.error("User profile update failed");
        next(err);
    }
};

module.exports = { getUserProfile, updateUserProfile };
