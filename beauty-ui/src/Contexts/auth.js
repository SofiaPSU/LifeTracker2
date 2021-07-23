import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null)

export const AuthContextProvider = ({ children })=>{
    const [user, setUser]= useState({})
    const [initialized, setInitialized] = useState(false)
    const [donations, setDonations] = useState([])
    const [error, setError] = useState(null)
    const [donateNumber, setDonateNumber] = useState(0)
    const [recycleNumber, setRecycleNumber]= useState(0)
    const [picture, setPicture] = useState(null)
    const authValue = { user, setUser, initialized, setInitialized, donations, setDonations, error, setError, donateNumber, setDonateNumber, recycleNumber, setRecycleNumber, picture, setPicture }

    return (
        <AuthContext.Provider value={authValue}>
        <>{children}</>
        </AuthContext.Provider>
    )
}

export const useAuthContext =()=> useContext(AuthContext)