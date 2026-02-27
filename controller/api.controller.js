import Cloth from "../model/Cloths.js"

export const createCloth = async (req, res) => {
  try {
    const cloth = await Cloth.create(req.body)
    return res.status(201).json({
      success: true,
      data: cloth,
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

export const getClothes = async (req, res) => {
  try {
    const query = { isActive: true }

    const clothes = await Cloth.find(query).sort({ createdAt: -1 })

    const total = await Cloth.countDocuments(query)

    return res.status(200).json({
      success: true,
      total,
      data: clothes,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export const getClothById = async (req, res) => {
  try {
    const cloth = await Cloth.findById(req.params.id)

    if (!cloth) {
      return res.status(404).json({
        success: false,
        message: "Cloth not found",
      })
    }

    return res.status(200).json({
      success: true,
      data: cloth,
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid cloth ID",
    })
  }
}
