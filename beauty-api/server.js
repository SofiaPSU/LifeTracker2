const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { PORT } = require("./config")
const {BadRequestError, NotFoundError } = require("./utils/errors")
const authRoutes = require("./routes/auth")

//added by Kelsey
// const homePage = require("./routes/home")
// app.use("/", homePage)

const app = express()

//Obehi
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

//Sofia - Login and Register
app.use("/auth", authRoutes)

app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" })
})
//Sofia - added in error handling
app.use((req, res, next)=>{
  return next(new NotFoundError)
})

app.use((err, req, res, next)=>{
  const status = err.status || 500
  const message = err.message

  return res.status(status).json({
    error: {message, status}
  })
})
//Sofia - changed port to use PORT from config file
app.listen(PORT, ()=> {
  console.log(`🚀 Server listening on port ` + PORT)
})


