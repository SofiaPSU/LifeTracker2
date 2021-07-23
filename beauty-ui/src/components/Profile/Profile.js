import "./Profile.css"
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { Button } from "@material-ui/core"
import { useNavigate } from "react-router"
import apiClient from "../../services/apiClient"
import { useEffect, useState } from "react"


export default function Profile({user, logoutUser, donate, recycle}) {
    console.log(user.profile_pic)
    const navigate = useNavigate()
    
    const handleOnLogout = async ()=>{
        await logoutUser()
        navigate("/")
    }
    const handleOnClick =  () =>{
        navigate("/settings")
    }
    const goToDonations = ()=>{
        navigate("/profile/donations")
    }
    const goToRecycled = ()=>{
        navigate("/profile/recycles")
    }

    return (
        <div className= "profile">
            <div className="info">
            <div className="avatar">
                {user.profile_pic?(
                    <Avatar src={user.profile_pic} style={{ height: '100px', width: '100px' }}>hello</Avatar>
                    ):(
                <Avatar style={{ height: '100px', width: '100px' }} src="/broken-image.jpg"></Avatar>)
                    }
                </div>
                <div className="user-info">
                <h2 className="text">{user.username}</h2>
                <h2 className="text">{user.age}</h2>
                <h2 className="text">{user.zip_code}</h2>
                <h2 className="text">{user.email}</h2>
                
                {!user.profile_pic?(<>
                    <Button className="text" onClick={handleOnClick}>Settings</Button>
                    <br/><br/>
                    <Button className="text" >Add Profile Picture</Button>
                    <br/><br/>
                    <Button className="text" onClick={handleOnLogout}>Log Out</Button></>
                ) :(<><Button className="text" onClick={handleOnClick}>Settings</Button>
                <br/><br/>
                <Button className="text" onClick={handleOnLogout}>Log Out</Button></>)}
                
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