import { authValidation } from "@/middlewares/authMiddlewares";
import { validateSchema } from "@/middlewares/schemaValidator";
import { starSystemSchemaJoi } from "@/modules/solar-systems/schemas/starSystemSchema";
import createStarSystemController from "@/modules/solar-systems/useCases/create/createController";
import findAllcontroller from "@/modules/solar-systems/useCases/findAll/findAllController";
import findByIdController from "@/modules/solar-systems/useCases/findById/findByIdController";
import { updateStarSystemsController } from "@/modules/solar-systems/useCases/update/updateController";

import { Router } from "express";

const starSystemRouters = Router()

starSystemRouters.post('/',authValidation, validateSchema(starSystemSchemaJoi),createStarSystemController)
starSystemRouters.get('/', findAllcontroller)
starSystemRouters.get('/:id',findByIdController)
starSystemRouters.put('/:id',authValidation, updateStarSystemsController)


export default starSystemRouters