import express from 'express'
import { bikeControllers } from './bike.controller'

const router = express.Router()

router.post('/create-products',bikeControllers.createBikeProduct);
router.get('/',bikeControllers.getAllBike)
router.get('/:bikeId',bikeControllers.getSingleBike)
router.get('/:bikeId',bikeControllers.deleteONEbike)

export const BikeRoutes=router;