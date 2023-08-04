import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/user.controller";
import { authjwt, verifySignup } from "../middlewares";

router.get('/', userCtrl.getUser)

router.get('/:userId', userCtrl.getUserById)

router.post("/", [authjwt.verifyToken, authjwt.isAmin, verifySignup.checkRolesExisted], userCtrl.createUser);

export default router;
