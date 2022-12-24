const {
    createCustomer, getCustomers,
    getCustomerById, deleteCustomer,
    updateCustomer
} = require('../controllers/customer.controller');


const Router = require('express').Router;

const customerRouter = Router();

customerRouter.post('/customers', createCustomer);
customerRouter.get('/customers', getCustomers);
customerRouter.get('/customers/:id', getCustomerById);
customerRouter.delete('/customers/:id', deleteCustomer);
customerRouter.put('/customers', updateCustomer);


module.exports = customerRouter;