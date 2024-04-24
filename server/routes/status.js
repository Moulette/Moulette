import express from 'express';
import statusController from '../controllers/statusController.js';
const router = express.Router();

// Status update route
router.post('/update', statusController.updateMovieStatus);

export default router;
