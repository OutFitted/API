const { Product } = require('../models');

const getAllProducts = async () => {
    return await Product.findAll();
};

const getProductById = async (id) => {
    return await Product.findByPk(id);
};

const createProduct = async (productData) => {
    return await Product.create(productData);
};

const updateProduct = async (id, productData) => {
    const product = await Product.findByPk(id);
    if (product) {
        await product.update(productData);
        return product;
    }
    throw new Error('Product not found');
};

const deleteProduct = async (id) => {
    const product = await Product.findByPk(id);
    if (product) {
        await product.destroy();
        return true;
    }
    throw new Error('Product not found');
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
