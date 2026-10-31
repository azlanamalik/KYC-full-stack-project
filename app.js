import express from "express"
import AuthRouter from "./routes/authRoute.js"
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "KYC API running" })
})


app.use('/auth' , AuthRouter)

export default app
