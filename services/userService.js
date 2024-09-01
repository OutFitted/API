const { User } = require('../models');
const { logger } = require('../middleware/logger');

const getUserProfile = async (id) => {
    const user = await User.findByPk(id);
    const { password, ...userWithoutPassword } = user.toJSON();
    logger.info("User profile retrieved successful");
    return userWithoutPassword;
};

const updateUserProfile = async (id, userData) => {
    const user = await User.findByPk(id);
    if (user) {
        const updatedUser = await user.update(userData);
        const { password, ...userWithoutPassword } = updatedUser;
        logger.info("User profile updated successful");
        return userWithoutPassword;
    }
    logger.error("User not found while updating profile");
    throw new Error('User not found');
};

module.exports = { getUserProfile, updateUserProfile };
