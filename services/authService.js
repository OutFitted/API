const { User } = require('../models');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const { generateToken } = require('../utils/jwt');
const { logger } = require('../middleware/logger');

const register = async (userData) => {
    const hashedPassword = await hashPassword(userData.password);
    const user = await User.create({ ...userData, password: hashedPassword });
    logger.info("User registered successfully");
    return user;
};

const login = async (email, password) => {
    logger.info(`Attempting login for user with email: ${email}`);
    const user = await User.findOne({ where: { email } });
    if (user && await comparePassword(password, user.password)) {
        const { password, ...userWithoutPassword } = user.toJSON();
        const token = generateToken(userWithoutPassword);
        logger.info("Login successful");
        return { user: userWithoutPassword, token };
    } else {
        logger.error("Invalid credentials provided");
        throw new Error('Invalid credentials');
    }
};

module.exports = { register, login };
