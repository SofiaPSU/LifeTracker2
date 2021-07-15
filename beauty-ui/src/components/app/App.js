import { BrowserRouter, Routes, Route } from "react-router-dom"
import Give from '../give/give';
import './App.css';
import Home from '../home/home';
import Navbar from '../navbar/navbar';
import Register from "../Register/Register";
import Login from "../Login/Login"
import { AuthContextProvider, useAuthContext } from "../../Contexts/auth"
import apiClient from "../../services/apiClient";
import { useEffect } from "react";

export default function AppContainer(){
    return (
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    )
}

const App = ()=> {
    const {user, setUser, initialized, setInitialized, error, setError} = useAuthContext()

    const isAuthenticated = Boolean(initialized && user?.email)
    
    useEffect(() => {
        const initApp = async () => {
          const { data } = await apiClient.fetchUserFromToken()
          if (data) setUser(data.user)
    
          setInitialized(true)
        }
    
        const token = localStorage.getItem("beauty_token")
        if (token) {
          apiClient.setToken(token)
          initApp()
        } else {
          setInitialized(true)
        }
      }, [isAuthenticated])
    
      const clearAppState = () => {
        setUser({})
        setError(null)
      }
    
      const logoutUser = async () => {
        await apiClient.logoutUser()
        clearAppState()
      }
    
    return(
        <div className="App">
            <BrowserRouter>
                <Navbar user={user} error={error} isAuthenticated={isAuthenticated} logoutUser={logoutUser}/>
                <Routes>
                    <Route path="/give" element={ <Give /> }/>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/register" element={ <Register user={user} setUser={setUser} />}/>
                    <Route path="/login" element={ <Login user={user} setUser={setUser}/>}/>
                </Routes>
                
            </BrowserRouter>
        </div>
    )
}


