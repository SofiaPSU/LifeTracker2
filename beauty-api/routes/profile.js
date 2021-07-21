const express = require("express")
const Profile = require("../models/profile")
const router = express.Router()
const security = require("../middleware/security")
const tokens = require("../utils/tokens")


router.get("/profile", security.requireAuthenticatedUser, async (req, res, next)=>{
    try {
        const {user} =res.locals
        const userDonations = await Profile.fetchNumberDonations(user.user_id)
        return res.status(200).json({ userDonations})
    } catch (error) {
        console.log(error)
        next(error)
    }
} )

router.get("/profile", security.requireAuthenticatedUser, async (req, res, next)=>{
    try {
        const {user} =res.locals
        const userRecycled = await Profile.fetchNumberDonations(user.user_id)
        return res.status(200).json({ userRecycled})
    } catch (error) {
        console.log(error)
        next(error)
    }
} )
module.exports = router