import express from "express"
import AuthRouter from "./routes/authRoute.js"
import { middleware } from "./middleware/middleware.js"
import compliance_router from "./routes/compliance.js"
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "KYC API running" })
})


app.use('/auth' , AuthRouter)
app.use('/compliance', middleware , compliance_router)

export default app
