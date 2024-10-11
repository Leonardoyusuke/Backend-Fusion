import { prisma } from "@/database/database";
import { characterCreate } from "@/helpers/interfaces/characterCreate";

async function createCharacter(name:string, speciesId:number, affiliationId:number, homePlanetId:number): Promise<characterCreate> {
    const create = await prisma.character.create({
        data:{
            name,
            speciesId,
            affiliationId,
            homePlanetId
        }
    })
    return create
}

async function findById(id:number) {
    const find = await prisma.character.findFirst({
        where:{
            id
        }
    })
    return find
}


const characterRepository = {
    createCharacter,
    findById
}
export default characterRepository