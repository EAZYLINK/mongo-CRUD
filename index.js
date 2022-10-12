require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.config');
const { notFound, errorHandler } = require('./middleware/APIError');
const taskRouter = require('./routes/task.route');


//Get environmental variables
const PORT = process.env.PORT || 8000;
const DBURL = process.env.DBURL;

//create app
const app = express();
app.use(express.json());

//Handle API end points
app.use('/api/v1/task', taskRouter);


//Handle API erorrs
app.use('*', notFound);
app.use(errorHandler);


const startServer = async() =>{
await connectDB(DBURL);
app.listen(PORT, () => {
    console.log(`Server is listening to Port: ${PORT}...`);
})
}

startServer();
