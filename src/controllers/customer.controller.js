const Customer = require('../models/customer')

const createCustomer = async (req, res) => {
    try {
        const {nombre, apellido, sexo, fecha_de_nacimiento, direccion, telefono, email} = req.body;
        const newCostumer = await Customer.create(
            {nombre, apellido, sexo, fecha_de_nacimiento, direccion, telefono, email});
        return res.status(201).json({
            location: `/customers/${newCostumer.id}`,
            customer:  newCostumer});

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};


const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        return res.status(200).json(customers);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};


const getCustomerById = async (req, res) => {
    try {
        const id = req.params.id

        const customer = await Customer.findOne({
            where: {
                id: +id
            }
        })

        if(customer) {
            return res.status(200).send(customer)
        }
        else {
            return res.status(404).json({
                message: "Not found"
            })
        }
    }
    catch (error) {
        return res.status(500).json({message: error.message});
    }
}


const deleteCustomer = async (req, res) => {
    try {
        const id = req.params.id

        const customer = await Customer.findOne({
            where: {
                id: +id
            }
        })

        await Customer.destroy({
            where: {
                id: +id
            }
        })

        if(customer) {
            return res.status(204).send()
        }
        else {
            return res.status(404).json({
                message: "Not found"
            })
        }
    }
    catch (error) {
        return res.status(500).json({message: error.message});
    }
}


const updateCustomer = async (req, res) => {
    try {
        const {id} = req.body
        delete req.body['id']
        const updateData = req.body

        await Customer.update(
            updateData,
            {
                where: {
                    id: +id
                }
            }
        )

        const customer = await Customer.findOne({
            where: {
                id: +id
            }
        })

        if(customer) {
            return res.status(200).json({
                message: `El cliente con id ${id} se ha actualizado.`,
                location: `/customers/${customer.id}`,
                customer:  customer
            })
        }
        else {
            return res.status(404).json({
                message: "Not found"
            })
        }

    }
    catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = {
    createCustomer,
    getCustomers,
    getCustomerById,
    deleteCustomer,
    updateCustomer
};