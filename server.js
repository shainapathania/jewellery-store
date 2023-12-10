const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDb = require('./config/connectDb')

// config dot env file
dotenv.config();

//database call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());



//routes
app.use('/api/v1/users', require('./routes/userRoute'))



//port
const PORT = 5000 || process.env.PORT

//LISTEN
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});