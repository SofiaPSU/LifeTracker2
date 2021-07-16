const express = require("express")
const User = require("../models/user")
const router = express.Router()
const security = require("../middleware/security")
const tokens = require("../utils/tokens")


router.post("/login", async (req, res, next)=>{
    try {
        const user = await User.login(req.body)
        const token = tokens.createUserJwt(user)
        return res.status(200).json({user, token})
    
    } catch (err) {
        next(err)
    }
})

router.post("/register", async (req,res, next)=>{
    try {
        //get user's email and password
        //and create a new user in db
        const user = await User.register(req.body)
        const token = tokens.createUserJwt(user)
        return res.status(201).json({user, token})
    } catch (err) {
        next(err)
    }
})

router.get("/me",  async (req, res, next)=>{
    console.log("local=", res.locals)
    try {
        const {user} = res.locals
        const username = await User.fetchUserByUsername(user.username)
        console.log(username)
        const publicUser = User.makePublicUser(username)
        return res.status(200).json({ user: publicUser})
    } catch (err) {
        console.log(err)
        next(err)
    }
})

module.exports = router