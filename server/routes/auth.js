// routes/auth.js
import express from 'express';
import { checkCredentials } from '../controllers/authController';
const router = express.Router();

router.post('/login', checkCredentials);

export default router;