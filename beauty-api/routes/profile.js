const express = require("express")
const Profile = require("../models/profile")
const router = express.Router()
const security = require("../middleware/security")
const tokens = require("../utils/tokens")



router.get("/profile", security.requireAuthenticatedUser, async (req, res, next)=>{
    try {
        const {user} = res.locals
        const userInfo = await Profile.fetchUserByEmail(user.email)
        return res.status(200).json({ userInfo})
    } catch (err) {
        console.log(err)
        next(err)
    }
})
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

// Obehi: This gets the giving entries of the user
router.get("/donations", security.requireAuthenticatedUser, async(req,res,next)=>{
    try{
        const user = res.locals.user
        console.log(user)
        const donations = await Profile.fetchDonations({ user })
        console.log(donations)
        return res.status(200).json({ donations })
    }catch(error){
        console.log(error)
        next(error)
    }
 
})


//Obehi: This gets the recycling entries of the user
// router.get("/profile/recycles", security, security.requireAuthenticatedUser, async(req,res,next)=>{
//     const user = res.locals.user

    
// })




module.exports = router