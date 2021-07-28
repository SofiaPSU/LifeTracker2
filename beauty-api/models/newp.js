const db = require("../db")
const {BadRequestError} = require("../utils/errors")

class newp{
    static async updateInfo({ user, settings }){
        if(!user){
            throw new BadRequestError("No authentication recognized")
        }
        const requiredFields = ["password"]
        requiredFields.forEach(field =>{
            if(!settings.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })
        const query = `
        UPDATE users SET
            password = $2
        WHERE username= $1;`
        const result = await db.query(query, [ user.username, settings.password])
        const profile = result.rows[0]
        return profile
    }

}

module.exports = newp