import "./Profile.css"
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { Button } from "@material-ui/core"
import { useNavigate } from "react-router"
import apiClient from "../../services/apiClient"
import { useEffect, useState } from "react"


export default function Profile({user, logoutUser}) {

    const navigate = useNavigate()
    const [donate, setDonation] = useState([])
    const [recycle, setRecycled]= useState([])
    
    useEffect(() => {
        
        const initApp = async () => {
            const { data } = await apiClient.fetchNumberDonationsRecycled()
            if (data)  
             setDonation(data.donations)
             setRecycled(data.recycled)
        }
      initApp()
        }, [])
    const handleOnLogout = async ()=>{
        await logoutUser()
        navigate("/")
    }
    const handleOnClick =  () =>{
        navigate("/settings")
    }
    const goToDonations = ()=>{
        navigate("/donations")
    }
    const goToRecycled = ()=>{
        navigate("/recycled")
    }

    return (
        <div className= "profile">
            <div className="info">
            <div className="avatar">
                <Avatar style={{ height: '100px', width: '100px' }} src="/broken-image.jpg"></Avatar>
                </div>
                <div className="user-info">
                <h2 className="text">{user.username}</h2>
                <h2 className="text">{user.age}</h2>
                <h2 className="text">{user.zip_code}</h2>
                <h2 className="text">{user.email}</h2>
                <Button className="text" onClick={handleOnClick}>Settings</Button>
                <br/><br/>
                <Button className="text" onClick={handleOnLogout}>Log Out</Button>
                </div>
                </div>
            <div className="welcome">
                <h1 className="welcome">Welcome, {user.first_name}!</h1>
            </div>
                
               
            <div className="row">
            <div className="donations">
                <Box border={1} borderColor='#2EC486'>
                    <h2 className="number">{donate}</h2>
                <h2 className="text">Products Donated!</h2>
                <Button className="text" onClick={goToDonations}><Box className= "box" border={1}>View Products</Box></Button>
                </Box>
            </div>
            <div className="recycled">
                <Box border={1} borderColor='#2EC486'>
                <h2 className="number">{recycle}</h2>
                <h2 className="text" >Products Recycled!</h2>
                <Button className="text" onClick={goToRecycled}><Box className= "box" border={1}>View Products</Box></Button>
                </Box>
                </div>
           
            </div>
           
        </div>
    )
}