const express = require("express")
const app = express()
const port = 3000
const cors= require("cors")
app.use(cors())

app.use('/projects',require("./projects.js"))
app.use('/team',require("./team.js"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})