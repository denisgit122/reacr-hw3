import Joi from "joi";

const carJoi=Joi.object({

    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'тільки букви'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.min':'більшу за 0'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})
export {carJoi}