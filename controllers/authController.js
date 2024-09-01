const authService = require('../services/authService');

const registerController = async (req, res, next) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json({ user });
    } catch (err) {
        next(err);
    }
};

const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await authService.login(email, password);
        res.status(200).json({ user, token });
    } catch (err) {
        next(err);
    }
};

module.exports = { registerController, loginController };
