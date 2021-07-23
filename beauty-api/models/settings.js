const db = require("../db")
const {BadRequestError} = require("../utils/errors")

class Settings{
    static async updateInfo({ user, settings }){
        if(!user){
            throw new BadRequestError("No authentication recognized")
        }
        const requiredFields = ["zip_code","first_name","last_name", "age", "profile_pic"]
        requiredFields.forEach(field =>{
            if(!settings.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })
        const query = `
        UPDATE users SET
            profile_pic = $1
            zip_code = $3,
            first_name = $4,
            last_name = $5,
            age = $6,
            password = $7,
        WHERE username= $2;`
        const result = await db.query(query, [settings.profile_pic, user.username, settings.zip_code, settings.first_name, settings.last_name, settings.age])
        const profile = result.rows[0]
        return profile
    }

}

module.exports = Settings



