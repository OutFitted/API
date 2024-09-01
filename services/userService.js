const { User } = require('../models');

const getUserProfile = async (id) => {
    return await User.findByPk(id);
};

const updateUserProfile = async (id, userData) => {
    const user = await User.findByPk(id);
    if (user) {
        await user.update(userData);
        return user;
    }
    throw new Error('User not found');
};

module.exports = { getUserProfile, updateUserProfile };
