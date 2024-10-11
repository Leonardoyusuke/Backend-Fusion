import Joi from "joi";

export const starSystemSchemaJoi = Joi.object({
name: Joi.string().min(2).required(),
description: Joi.string().min(5).required(),
})