require('dotenv').config();
const express = require('express');
const connectToDatabase = require('./config/db');

const routes = require('./routes/routes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Database Connection
connectToDatabase();

// Start Server
const port = process.env.PORT || 8002;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});