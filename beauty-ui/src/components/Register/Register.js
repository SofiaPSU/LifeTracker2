import "./Register.css"
import { Card } from "components"
import { useRegistrationForm } from "../../hooks/useRegistrationForm"

export default function Register(){
    const {form, errors, isProcessing, handleOnChange, handleOnSubmit} = useRegistrationForm()
    return (
        <div className = "Register">
            <div className = "container">
                <Card className="reg-card">
                    <h2>Register</h2>
                    {errors?.form && <span className="error">{errors.form}</span>}
                    <br />
                    <div className="form">
                        <div className="split-input">
                            <div className="input-field">
                                <label htmlFor="name">First Name</label>
                                <input type="text" name ="first_name" value={form.first_name} onChange = {handleOnChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="name">Last Name</label>
                                <input type="text" name="last_name" value = {form.last_name} onChange={handleOnChange}/>
                            </div>
                        </div>
                        <br />
                        <div className="split-input">
                            <div className="input-field">
                                <label htmlFor="name">Age</label>
                                <input type="text" name="age" value = {form.age} onChange={handleOnChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="name">Zip Code</label>
                                <input type ="text" name="zip_code" value={form.zip_code} onChange={handleOnChange}/>
                            </div>
                        </div>
                        <br />
                        <div className="input-field">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" value={form.username} onChange={handleOnChange}/>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

