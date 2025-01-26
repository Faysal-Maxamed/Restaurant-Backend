import express from 'express';
import { createFruitProduct, deleteFruitProduct, getFruitProductById, getFruitProducts, updateFruitProduct } from '../controlller/fruitproductController.js';

const router = express.Router();
router.route('/').get(getFruitProducts).post(createFruitProduct);
router.route('/:id').get(getFruitProductById).put(updateFruitProduct).delete(deleteFruitProduct);

export default router;
