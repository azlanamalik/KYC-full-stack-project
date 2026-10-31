import app from "./app.js"

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})


//dont touch this file code logic is in app