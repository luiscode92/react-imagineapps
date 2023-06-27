const express = require('express');
const auth = require('../middleware/auth');

const userController = require('../controllers/users');
const companyController = require('../controllers/company');
const productController = require('../controllers/product');

const router = express.Router();

// User routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Company routes
router.get('/companies', auth.authenticate, auth.isAdmin, companyController.getCompanies);
router.get('/companies/:id', auth.authenticate, auth.isAdmin, companyController.getCompany);
router.post('/companies', auth.authenticate, auth.isAdmin, companyController.createCompany);
router.put('/companies/:id', auth.authenticate, auth.isAdmin, companyController.updateCompany);
router.delete('/companies/:id', auth.authenticate, auth.isAdmin, companyController.deleteCompany);

// Product routes
router.get('/products', auth.authenticate, productController.getProducts);
router.get('/products/:id', auth.authenticate, productController.getProduct);
router.post('/products', auth.authenticate, auth.isAdmin, productController.createProduct);
router.put('/products/:id', auth.authenticate, auth.isAdmin, productController.updateProduct);
router.delete('/products/:id', auth.authenticate, auth.isAdmin, productController.deleteProduct);

module.exports = router;
