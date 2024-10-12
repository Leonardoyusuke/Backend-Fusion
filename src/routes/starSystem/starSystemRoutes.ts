import { validateSchema } from "@/middlewares/schemaValidator";
import { starSystemSchemaJoi } from "@/modules/solar-systems/schemas/starSystemSchema";
import createStarSystemController from "@/modules/solar-systems/useCases/create/createController";
import findAllcontroller from "@/modules/solar-systems/useCases/findAll/findAllController";
import findByIdController from "@/modules/solar-systems/useCases/findById/findByIdController";
import { Router } from "express";

const starSystemRouters = Router()

starSystemRouters.post('/',validateSchema(starSystemSchemaJoi),createStarSystemController)
starSystemRouters.get('/', findAllcontroller)
starSystemRouters.get('/:id',findByIdController)


export default starSystemRouters