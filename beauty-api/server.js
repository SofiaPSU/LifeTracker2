const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

//added by Kelsey
// const homePage = require("./routes/home")
// app.use("/", homePage)

const app = express()

//Obehi
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" })
})

const port = process.env.port || 3001

app.listen(port, ()=> {
  console.log(`🚀 Server listening on port ` + port)
})


