import { Router } from "express";
const router = Router()

import * as producstCtrl from '../controllers/products.controller'
import { authjwt } from "../middlewares";


router.post('/', [authjwt.verifyToken, authjwt.isModerator], producstCtrl.createProduct)

router.get('/', producstCtrl.getProducts)

router.get('/:productId', producstCtrl.getProductById)

router.put('/:productId', authjwt.verifyToken, producstCtrl.updateProductById)

router.delete('/:productId',[authjwt.verifyToken, authjwt.isModerator], producstCtrl.deleteProductById)

export default router;