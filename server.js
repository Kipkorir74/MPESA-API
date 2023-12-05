const express = require('express');

// load environment variables from a .env file into process.env
require("dotenv").config()

const app = express();



//app configurations
app.use(express.json());

app.use(express.urlencoded({extended:false}));

//route.
const PaymentRoutes = require('./backend/routes/routes')

//listening to a specific route
app.use('/api/payments', PaymentRoutes)


//listening to a port.

app.listen(process.env.PORT, () => {
    console.log(`app listening to port ${process.env.PORT}`)

    
});


