const {connect} = require('mongoose');

const connectDB = async(URL) => {
    await connect(URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }, ()=>{
        console.log("Connected to Database successfully");
    });
}


module.exports = connectDB;