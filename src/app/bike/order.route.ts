import express from 'express'
import { bikeControllers } from './bike.controller';


const router = express.Router()

router.post('/create-orders',bikeControllers.createOrderbike)
router.get('/',bikeControllers.getAllOrder)
router.get('/:orderId',bikeControllers.getONeOrderFromDB)
export const OrderRoutes=router;