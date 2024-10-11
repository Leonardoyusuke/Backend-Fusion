import { BadRequest } from "@/helpers/errors/apiErrors";
import characterRepository from "../../repositories/charactersRepositories";

export default async function createCharacterService(name:string, speciesId:number, affiliationId:number, homePlanetId:number) {
    const create = await characterRepository.createCharacter(name, speciesId, affiliationId, homePlanetId)
    if(!create) throw new BadRequest("Bad Request")
        //Falta parte de buscar pelos nome e transformar em ID
    return create
}