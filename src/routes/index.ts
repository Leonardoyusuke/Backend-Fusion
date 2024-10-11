import { Router } from "express";
import starSystemRouters from "./starSystem/starSystemRoutes";


const router = Router()

router.use('/star-systems',starSystemRouters)


export default router