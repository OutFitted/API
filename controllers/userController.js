const userService = require('../services/userService');

const getUserProfile = async (req, res, next) => {
    try {
        const user = await userService.getUserProfile(req.user.id);
        res.status(200).json({ user });
    } catch (err) {
        next(err);
    }
};

const updateUserProfile = async (req, res, next) => {
    try {
        const user = await userService.updateUserProfile(req.user.id, req.body);
        res.status(200).json({ user });
    } catch (err) {
        next(err);
    }
};

module.exports = { getUserProfile, updateUserProfile };
