import {Router} from "express";
import registerUser from "../controllers/unser.conytroller.js";

const router = Router()

router.route("/register").post(registerUser)

export default router 