//Dependencies
const express = require('express')
const sequelize = require('./database/sequelize')
const morgan = require('morgan')
const ExpressError = require('./utils/ExpressError')
swaggerJsdoc = require("swagger-jsdoc");
swaggerUi = require("swagger-ui-express");


//Express
const app = express()


//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routes
const customerRouter = require('./routes/customer.routes')
app.use('/api', customerRouter)

//Documentation
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Customer API with Swagger",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Giuliano",
                url: "https://www.linkedin.com/in/giuliano-gonzalez-59583b120/",
                email: "giuli1297.gg@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ['./src/**/*.js'],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

//Error Handling
app.all('*', (req, res, next)=>{
    next(new ExpressError('Page Not Found', 404));
});

const main = async () => {
    try{
        await sequelize.sync()
        await app.listen(3000);
        console.log("Server arriba en puerto 3000")
    }catch(error){
        console.error(error)
    }
}

main();


module.exports = app