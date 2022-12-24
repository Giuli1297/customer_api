//Dependencies
const express = require('express')
const sequelize = require('./database/sequelize')
const morgan = require('morgan')
const ExpressError = require('./utils/ExpressError')


//Express
const app = express()


//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routes
const customerRouter = require('./routes/customer.routes')
app.use(customerRouter)

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