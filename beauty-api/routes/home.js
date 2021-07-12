const express = require("express")
const Home = require("../models/home")
//const security = require("../middleware/security")
const router = express.Router()
  
router.get("/", async (req, res, next) => {
    res.status(200).json(home)
})

module.exports = router
  