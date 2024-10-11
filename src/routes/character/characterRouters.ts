import { validateSchema } from "@/middlewares/schemaValidator";
import { characterSchemaJoi } from "@/modules/charaters/schemas/characterSchema";
import createCharacterController from "@/modules/charaters/useCases/create/createController";
import { Router } from "express";

const characterRouter = Router()

characterRouter.post('/',validateSchema(characterSchemaJoi),createCharacterController)

export default characterRouter