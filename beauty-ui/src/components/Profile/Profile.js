import "./Profile.css"
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { Button } from "@material-ui/core"
import { useNavigate } from "react-router"
import SimpleModal from "./Popup"

export default function Profile({user, logoutUser, donateNumber, recycleNumber}) {
    console.log(user.profile_pic)
    const navigate = useNavigate()
    


    const handleOnLogout = async ()=>{
        await logoutUser()
        navigate("/")
    }
    const handleOnClick =  () =>{
        navigate("/profile/settings")
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
                    <Avatar src={user.profile_pic} style={{ height: '100px', width: '100px' }}></Avatar>
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
                    <Button className="text" onClick={handleOnClick}><Box border={1}>Settings</Box></Button>
                    <br/><br/>
                    <SimpleModal />
                    <br/><br/>
                    <Button className="text" onClick={handleOnLogout}><Box border={1}>Log Out</Box></Button></>
                ) :(<><Button className="text" onClick={handleOnClick}><Box border={1}>Settings</Box></Button>
                <br/><br/>
                <Button className="text" onClick={handleOnLogout}><Box border={1}>Log Out</Box></Button></>)}
                
                </div>
                </div>
            <div className="welcome">
                <h1 className="welcome">Welcome, {user.first_name}!</h1>
            </div>
                
               
            <div className="row">
            <div className="donations">
                <Box border={1} borderColor='#2EC486'>
                    <h2 className="number">{donateNumber}</h2>
                <h2 className="text">Products Donated!</h2>
                <Button className="text" onClick={goToDonations}><Box className= "box" border={1}>View Products</Box></Button>
                </Box>
            </div>
            <div className="recycled">
                <Box border={1} borderColor='#2EC486'>
                <h2 className="number">{recycleNumber}</h2>
                <h2 className="text" >Products Recycled!</h2>
                <Button className="text" onClick={goToRecycled}><Box className= "box" border={1}>View Products</Box></Button>
                </Box>
                </div>
           
            </div>
        
        </div>
    )
}