import { BrowserRouter, Routes, Route } from "react-router-dom"
import Give from '../give/give';
import './App.css';
import Home from '../home/home';
import Navbar from '../navbar/navbar';
import Register from "../Register/Register";
import Login from "../Login/Login";
import GiveSuccess from "../give/giveSuccess";
import GiveUnauthorized from "../give/giveUnauthorized";
import Tips from "../Tips/tips";
import { AuthContextProvider, useAuthContext } from "../../Contexts/auth";
import apiClient from "../../services/apiClient";
import { useEffect } from "react";
import Profile from "../Profile/Profile";

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
      document.title="Hīrā"
        const initApp = async () => {
          const { data } = await apiClient.fetchUserFromToken()
          if (data) setUser(data.user)
          console.log(data)
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
        console.log("function is invoking")
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
                    <Route path = "/tips" element={ <Tips /> }/>
                    <Route path="/give" element={ <Give user={user} setUser={setUser} /> }/>
                    <Route path="/give/giveSuccess" element={ <GiveSuccess user={user} setUser={setUser} /> }/>
                    <Route path="/give/giveUnauthorized" element={ <GiveUnauthorized /> }/>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/register" element={ <Register user={user} setUser={setUser} />}/>
                    <Route path="/login" element={ <Login user={user} setUser={setUser}/>}/>
                    <Route path="/profile" element={ <Profile user={user}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


