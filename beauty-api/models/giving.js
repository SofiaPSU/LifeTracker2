const { BadRequestError } = require("../utils/errors")
const db = require("../db")

class Giving{

    //Create A Giving
    static async createGiving({ newGiving, user }){

        //Obehi: Checks if user enter all required fields in the give form
        const requiredFields = ["product_type","quantity", "is_used", "zip_code", "product_pic"]
        requiredFields.forEach((field) => {
            if (!newGiving?.hasOwnProperty(field)) {
              throw new BadRequestError(`Missing required field - ${field} - in request body.`)
            }
          })
          console.log(user)

          const results= await db.query(
            // Obehi: 
            //VALUES: I like to think of these of placeholders for what I'm inserting, cause I dont know exactly what the user
            // is gonna put down, but i know it's gonna be something cause its required
           
            `
            INSERT INTO give(product_type, quantity, is_used, zip_code, product_pic, user_id)
            VALUES($1, $2, $3, $4, $5, (SELECT id FROM users WHERE username = $6) )
            RETURNING id,
                      product_type,
                      quantity,
                      is_used,
                      zip_code,
                      product_pic,
                      user_id;
            `, 
            [newGiving.product_type, newGiving.quantity, newGiving.is_used, newGiving.zip_code, newGiving.product_pic || "https://images.unsplash.com/photo-1550630997-c46a95b7c1b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGxhc3RpYyUyMGJvdHRsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", user.username]
            )
        
            return results.rows[0]
    }






}

module.exports = Giving