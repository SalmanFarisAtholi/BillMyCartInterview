import Joi from "joi"

export const createClothSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 2 characters",
  }),
  brand: Joi.string().trim().max(100).optional(),
  category: Joi.string().trim().required().messages({
    "string.empty": "Category is required",
  }),
  description: Joi.string().trim().max(500).optional(),
  isActive: Joi.boolean().optional(),
})
