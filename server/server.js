// server.js
const express = require('express');
const movieRoutes = require('./routes/api'); // Import the movie API routes
const authRoutes = require('./routes/auth'); // Import the auth routes
const listRoutes = require('./routes/list'); // Import the list routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Use the movie API routes
app.use('/movies', movieRoutes);

// Use the auth routes
app.use('/auth', authRoutes);

// Use the list routes
app.use('/list', listRoutes);

// Example route for other components
app.get('/', (req, res) => {
  res.send('Welcome to the Movie API Server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
