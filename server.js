import express from "express"
import mongoose from "mongoose"
import envConfig from "./config/env.config.js"
import apiRoutes from "./routes/api.routes.js"

const app = express()
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: true }))
console.log(process.env.DB_CONNECTION)
let dbSuccess = "Fail"

mongoose
  .connect(process.env.DB_CONNECTION, {
    dbName: `${process.env.DB_NAME}`,
  })
  .then(() => {
    dbSuccess = "Success"
    console.log("DB Connected")
  })
var db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:")) //TODO::Send slack notification

app.get("/", (req, res) => {
  res.send("Hello, World!")
})

app.use("/api", apiRoutes)

const port = envConfig.general.PORT
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
