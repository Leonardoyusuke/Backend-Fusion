import starSystemRepository from "../../repositories/starSystemRepositories";
import { BadRequest } from "@/helpers/errors/apiErrors";

export default async function createStarSystemService(name:string, description:string) {
    const create = await starSystemRepository.createStarSystem(name,description)
    if(!create) throw new BadRequest("BadRequest")
    return create
}

