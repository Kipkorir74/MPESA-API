const express = require('express');

// load environment variables from a .env file into process.env
require("dotenv").config()

const app = express();

const PORT = process.env.PORT;

//app configurations
app.use(express.json());

app.use(express.urlencoded({extended:false}));

//route.
const PaymentRoutes = require('./backend/routes')

//listening to a specific route
app.use('/api/payments', PaymentRoutes)


//listening to a port.

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
});


