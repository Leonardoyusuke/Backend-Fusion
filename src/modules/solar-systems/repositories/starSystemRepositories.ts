import { prisma } from "@/database/database";
import { StarSystemCreate } from "@/helpers/interfaces/StarSystemCreate";
import { StarSystem } from "@prisma/client";

async function createStarSystem(name: string, description: string): Promise<StarSystemCreate> {
    const create = await prisma.starSystem.create({
        data: {
            name,
            description
        },
    });
    return create;
}

const starSystemRepository = {
    createStarSystem
};

export default starSystemRepository