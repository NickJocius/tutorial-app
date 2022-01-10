const express = require('express');
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

require('dotenv').config();

// app
const app = express();

// import routes
const authRoutes = require('./routes/auth');

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin: process.env.CLIENT_URL}));

// routes middleware
app.use('/api', authRoutes);

// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})