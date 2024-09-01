const { User } = require('../models');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const { generateToken } = require('../utils/jwt');

const register = async (userData) => {
    const hashedPassword = await hashPassword(userData.password);
    const user = await User.create({ ...userData, password: hashedPassword });
    return user;
};

const login = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (user && await comparePassword(password, user.password)) {
        const token = generateToken(user);
        return { user, token };
    } else {
        throw new Error('Invalid credentials');
    }
};

module.exports = { register, login };
