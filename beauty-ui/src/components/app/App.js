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
import Settings from "../Profile/Settings";
import UserDonations from "../View/donations";
import UserRecycles from "../View/recycles";


export default function AppContainer(){
    return (
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    )
}

const App = ()=> {
    const {user, setUser, initialized, setInitialized, donations, setDonations, recycles, setRecycles, error, setError, donate, setDonation, recycle, setRecycled} = useAuthContext()
    
    
    const isAuthenticated = Boolean(initialized && user?.email)
    
    useEffect(() => {
      document.title="Hīrā"
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
    
      
      useEffect(() => {
        const fetchDonations = async () => {
          const { data, error } = await apiClient.fetchDonations()
          if (error) setError(error)
          if (data?.donations) {
            //console.log(data.donations)
            setDonations(data.donations)
            console.log(data.donations[0].created_at)
          }
        }
        
        fetchDonations()
      }, [])

      useEffect(() => {
        const fetchRecycles = async () => {
          const { data, error } = await apiClient.fetchRecycles()
          if (error) setError(error)
          if (data?.donations) {
            //console.log(data.donations)
            setRecycles(data.recycles)
           // console.log(data.donations[0].created_at)
          }
        }
        
        fetchRecycles()
      }, [])








      useEffect(() => {
        
        const ProfileApp = async () => {
            const { data } = await apiClient.fetchNumberDonationsRecycled()
            if (data)  
             setDonation(data.donations)
             setRecycled(data.recycles)
        }
      ProfileApp()
        }, [setDonation, setRecycled])

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
                    <Route path="/give" element={ <Give user={user} setUser={setUser} setDonation={setDonation} setDonations={setDonations} setRecycled={setRecycled} setRecycles={setRecycles}    initialized={initialized}/> }/>
                    <Route path="/give/giveSuccess" element={ <GiveSuccess user={user} setUser={setUser} /> }/>
                    <Route path="/give/giveUnauthorized" element={ <GiveUnauthorized /> }/>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/register" element={ <Register user={user} setUser={setUser} />}/>
                    <Route path="/login" element={ <Login user={user} setUser={setUser}/>}/>
                    <Route path="/profile" element={ <Profile user={user} logoutUser={logoutUser} donate={donate} recycle={recycle}/>}/>
                    <Route path="/profile/donations" element={ <UserDonations 
                                                                user={user} 
                                                                setUser={setUser}
                                                                //setDonations={setDonations}
                                                                donations={donations} 
                                                                donate={donate}
                                                                /> } />

                    <Route path="/profile/recycles" element={ <UserRecycles
                                                                                    user={user} 
                                                                                    setUser={setUser}
                                                                                    //setDonations={setDonations}
                                                                                    recycles={recycles} 
                                                                                    recycle={recycle}
                                                                                    /> } />

                    <Route path="/profile/settings" element={ <Settings user={user}/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
}


