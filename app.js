import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "KYC API running" })
})

export default app
