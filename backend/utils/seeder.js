const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');


const products = require('../data/products');

dotenv.config({ path: 'backend/config/config.env' })



const seedProducts = async () => {
    try {
        await connectDatabase();

        await Product.deleteMany();
        console.log('Products are deleted');

        await Product.insertMany(products)
        console.log('All Products are added');

        process.exit();
        
    }
    catch(error) {
        console.log(error.message);
        process.exit();
    }
}


seedProducts()