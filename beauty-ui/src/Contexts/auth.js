import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null)

export const AuthContextProvider = ({ children })=>{
    const [user, setUser]= useState({})
    const [initialized, setInitialized] = useState(false)
    const [donations, setDonations] = useState([])
    const [error, setError] = useState(null)
    const [donate, setDonation] = useState(0)
    const [recycle, setRecycled]= useState([])
    const authValue = { user, setUser, initialized, setInitialized, donations, setDonations, error, setError, donate, setDonation, recycle, setRecycled }
console.log(donate)
    return (
        <AuthContext.Provider value={authValue}>
        <>{children}</>
        </AuthContext.Provider>
    )
}

export const useAuthContext =()=> useContext(AuthContext)