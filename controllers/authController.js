const authService = require('../services/authService');
const { logger } = require('../middleware/logger');

const registerController = async (req, res, next) => {
    try {
        logger.info("Start register a user");
        const user = await authService.register(req.body);
        res.status(201).json({ user });
    } catch (err) {
        logger.error(`Error register a user: ${err.message}`);
        next(err);
    }
};

const loginController = async (req, res, next) => {
    try {
        logger.info("Start login a user");
        const { email, password } = req.body;
        const { user, token } = await authService.login(email, password);
        res.status(200).json({ user, token });
    } catch (err) {
        logger.error(`Error login a user: ${err.message}`);
        next(err);
    }
};

module.exports = { registerController, loginController };
