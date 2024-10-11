import { validateSchema } from "@/middlewares/schemaValidator";
import { starSystemSchemaJoi } from "@/modules/solar-systems/schemas/starSystemSchema";
import createStarSystemController from "@/modules/solar-systems/useCases/create/createController";
import { Router } from "express";

const starSystemRouters = Router()

starSystemRouters.post('/',validateSchema(starSystemSchemaJoi),createStarSystemController)

export default starSystemRouters