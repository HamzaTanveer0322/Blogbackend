const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const connectDB = require('./db/connections');
const cors = require('cors');
const route = require('./routes/userroute');
const app = express();
const multer = require('multer');

app.use(express.json());
connectDB();
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

const corsOptions = {
    origin:'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
};

app.use(cors(corsOptions));

const port = process.env.PORT || 3000; // Use port 3000 as a fallback

app.get('/', (req, res) => {
    res.json({ message: 'Hello, this is a GET request!' });
});

app.use('/user', route);
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('Server is listening on port > ' + port);
});
