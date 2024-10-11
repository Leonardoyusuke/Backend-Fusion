import createStarSystemController from "@/modules/solar-systems/useCases/create/createController";
import { Router } from "express";

const starSystemRouters = Router()

starSystemRouters.post('/',createStarSystemController)

export default starSystemRouters