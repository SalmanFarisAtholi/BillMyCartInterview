import dotenv from "dotenv"
dotenv.config()
import express from "express"
import {
  createCloth,
  getClothes,
  getClothById,
} from "../controller/api.controller.js"
import { validate } from "../middleware/validate.js"
import { createClothSchema } from "../validations/clothes.validation.js"
const router = express.Router()

router.get("/clothes", getClothes)
router.post("/clothes/create", validate(createClothSchema), createCloth)
router.get("/clothes/:id", getClothById)

export default router
