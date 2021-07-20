const db = require("../db")
const {BadRequestError} = require("../utils/errors")


class Profile{

    static makePublicUser(user){
        return{
            id: user.id,
            email: user.email,
            age: user.age,
            username: user.username,
            first_name: user.first_name,
            zip_code: user.zip_code
            
        }
    }
    //need to get name, username, age, zip code and email of the user
    static async fetchUserByEmail(email){
        if(!email){
            throw new BadRequestError("No email provided")
        }
        const query =`SELECT *  FROM users WHERE email =$1`
        const result = await db.query(query, [email.toLowerCase()])
        const user = result.rows[0]
        return user
    }
    //need to get the number of donations
    static async fetchNumberDonations(userId){
        if(!userId){
            throw new BadRequestError("No email provided")
        }
        //where user
        const query =`SELECT * FROM give WHERE user_id =$1 AND is_used = FALSE`
        const result = await db.query(query, [userId])
        const donations = result.rows[0]
        console.log(donations)
        return donations.length
    }
    //need to get number of recycled products
    static async fetchNumberRecycled(userId){
        if(!userId){
            throw new BadRequestError("No email provided")
        }
        const query =`SELECT * FROM give WHERE user_id =$1 AND is_used = true`
        const result = await db.query(query, [userId])
        const recycled = result.rows[0]
        console.log(recycled)
        return recycled.length
    }
}
module.exports = Profile