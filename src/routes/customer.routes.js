/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       required:
 *         - nombre
 *         - apellido
 *         - direccion
 *         - telefono
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the customer
 *         nombre:
 *           type: string
 *           description: The name of the customer
 *         apellido:
 *           type: string
 *           description: The last name of the customer
 *         sexo:
 *           type: string
 *           description: The gender of the customer
 *         fecha_de_nacimiento:
 *           type: date
 *           description: The birthday of the customer
 *         direccion:
 *           type: string
 *           description: The address of the customer
 *         telefono:
 *           type: string
 *           description: The contact number of the customer
 *         email:
 *           type: string
 *           description: The contact mail of the customer
 *       example:
 *         id: 102
 *         nombre: Giuliano
 *         apellido: Gonzalez
 *         sexo: M
 *         fecha_de_nacimiento: 1997-02-17
 *         direccion: Eugenio A. Garay 201, Aregua, Paraguay.
 *         telefono: (+595)971117026
 *         email: giuli1297.gg@gmail.com
 */
/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: The customer managing API
 * /api/customers:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       201:
 *         description: The created customer and its location.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       500:
 *         description: Some server error
 *   get:
 *     summary: Lists all the customers
 *     tags: [Customer]
 *     responses:
 *       200:
 *         description: The list of all customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 *   put:
 *     summary: Updates a customer information by its id.
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: The updated customer and its location.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       404:
 *         description: The customer id wasn't found in the database
 * /api/customers/{id}:
 *   get:
 *     summary: Return the customer with the corresponding id.
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer id
 *     responses:
 *       200:
 *         description: A customer with the given id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 *       404:
 *         description: The customer id wasn't found in the database
 *   delete:
 *     summary: Drops the customer with the corresponding id.
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer id
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: The customer id wasn't found in the database
 */

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