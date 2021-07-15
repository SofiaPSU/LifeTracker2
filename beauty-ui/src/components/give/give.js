
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import './give.css';

export default function Give({ user,setUser }){
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        product_type:"",
        quantity:"",
        is_used:"",
        zip_code:"",
        product_pic:"",
      })
    
      const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((e) => ({ ...e, form: null }))

        try {
            const res = await axios.post("http://localhost:3001/give/", {
              product_type: form.product_type,
              quantity: form.quantity,
              is_used: form.is_used,
              zip_code: form.zip_code,
              product_pic: form.product_pic,
            })
            if (res?.data?.user) {
              setUser(res.data.user)
            } else {
              setErrors((e) => ({ ...e, form: "Something went wrong with the giving submission" }))
            }
          } catch (err) {
            console.log(err)
            const message = err?.response?.data?.error?.message
            setErrors((e) => ({ ...e, form: message ?? String(err) }))
          } finally {
            setIsProcessing(false)
          }
    }
    
    return(
        <div className="Give">
            <div className="card">
              <div className="giveTitle">
                 <h2>GIVE</h2>
              </div>
              <div className="giveDescription">
                <p>
                    Empty, gently used, or never opened,  Hīrā will find the mose sustainable and eco-friendly way 
                    to get rid of your unwanted products. 
                </p>
              </div>
              
              <div className="feedArea">
                <img className="givePicture" src = "https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Makeup"></img>
                <div className="giveForm">
                  <h3>GIVE</h3>
                  <div className="product">
                    Product
                  </div>
                  <div className="quantity">
                    Quantity
                  </div>
                  <div className="productImg">
                    Product Image
                  </div>
                  <div className="zipCode">
                    Zip Code
                  </div>
                  <div className="productCon">
                    Used
                  </div>

                </div>

              </div>

            </div>
        </div>

    );




}

