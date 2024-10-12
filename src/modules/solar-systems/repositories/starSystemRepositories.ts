import { prisma } from "@/database/database";
import { StarSystemCreate } from "@/helpers/interfaces/StarSystemCreate";

async function createStarSystem(name: string, description: string): Promise<StarSystemCreate> {
    const create = await prisma.starSystem.create({
        data: {
            name,
            description
        },
    });
    return create;
}
async function findByName(name: string) {
    const find = await prisma.starSystem.findFirst({
        where:{
            name
        }
    });
    return find;
}

async function findById(id:number) {
    const find = await prisma.starSystem.findFirst({
        where:{
            id
        },
        include:{
            planets:true
        }
    });
    return find;
}

async function getStarSystems() {
    const get = await prisma.starSystem.findMany()
}

const starSystemRepository = {
    createStarSystem,
    findByName,
    findById,
    getStarSystems
};

export default starSystemRepository