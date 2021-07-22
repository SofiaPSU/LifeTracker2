const db = require("../db")
const {BadRequestError} = require("../utils/errors")


class Profile{
    //need to get the number of donations
    static async fetchNumberDonations({user}){
        if(!user.username){
            throw new BadRequestError("No email provided")
        }
        const query =`SELECT quantity FROM give WHERE user_id =(SELECT id FROM users WHERE username = $1) AND is_used = FALSE`
        const result = await db.query(query, [user.username])
        const donations = result.rows
        //console.log(donations)
        return donations
    }
    //need to get number of recycled products
    static async fetchNumberRecycled({user}){
        if(!user.username){
            throw new BadRequestError("No email provided")
        }
        const query =`SELECT quantity FROM give WHERE user_id =(SELECT id FROM users WHERE username = $1) AND is_used = true`
        const result = await db.query(query, [user.username])
        const recycled = result.rows
        //console.log(recycled)
        
     // recycled.reduce(function(a,b) {return a+b;}, 0)
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
                            product_type,
                             quantity,
                            created_at
                       FROM give 
                       WHERE user_id =(SELECT id FROM users WHERE username = $1) AND is_used = false
                       `
        const results = await db.query(query, [user.username])
        const donations = results.rows
        return donations
    }
}
module.exports = Profile