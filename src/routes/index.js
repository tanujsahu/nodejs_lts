// routes/index.js
import express from 'express';
import itemsRouter from './items.js';

const router = express.Router();

router.use('/items', itemsRouter);

export default router;
