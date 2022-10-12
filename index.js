require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.config');
const { notFound, errorHandler } = require('./middleware/APIError');


//Get environmental variables
const PORT = process.env.PORT || 8000;
const DBURL = process.env.DBURL;

//create app
const app = express();

//Handle API erorrs
app.use('*', notFound);
app.use(errorHandler);

//API Home page
app.use('/', (req, res) => {
    res.send("Welcome to a TODO API");
})

const startServer = async() =>{
await connectDB(DBURL);
app.listen(PORT, () => {
    console.log(`Server is listening to Port: ${PORT}...`);
})
}

startServer();
