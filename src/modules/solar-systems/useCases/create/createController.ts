import { Request, Response } from "express";
import createStarSystemService from "./createService";
import { BadRequest } from "@/helpers/errors/apiErrors";

export default async function createStarSystemController(req:Request, res:Response) {
    const {name, description} = req.body;
    try {
        const create = await createStarSystemService(name, description);
        if(create) res.sendStatus(201).json(create)
    } catch (error) {
        if(error===BadRequest) res.sendStatus(400);
    }
    
}