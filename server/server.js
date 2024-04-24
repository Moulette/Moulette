import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Import routes
import movieRoutes from './routes/api';
import authRoutes from './routes/auth';
import listRoutes from './routes/list';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', movieRoutes);
app.use('/auth', authRoutes);
app.use('/list', listRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});