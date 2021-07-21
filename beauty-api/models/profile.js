const db = require("../db")
const {BadRequestError} = require("../utils/errors")


class Profile{

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
        return donations
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
        return recycled
    }


    //need to get all of user's donations
    static async fetchDonations({ user }){
        if(!user){
            throw new BadRequestError("No authentication recognized")
        }
        const query = `
                       SELECT 
                            id, 
                            user_id, 
                            product_pic, 
                            product_type 
                       FROM give 
                       WHERE user_id =(SELECT id FROM users WHERE username = $1) AND is_used = false
                       `
        const results = await db.query(query, [user.username])
        const donations = results.rows
        return donations
    }
}
module.exports = Profile