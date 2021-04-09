import { Router } from 'express';
import { captureOrder, createOrder } from './controller';

export const router = Router();

router.post('/create-order', createOrder);
router.post('/capture-order', captureOrder);
