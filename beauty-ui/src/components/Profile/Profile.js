import "./Profile.css"
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange, green } from '@material-ui/core/colors'
import { Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
  }));

export default function Profile({user}) {
    const classes = useStyles();
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
                <Button className="text">Settings</Button>
                <br/><br/>
                <Button className="text">Log Out</Button>
                </div>
                </div>
            <div className="welcome">
                <h1 className="welcome">Welcome, {user.first_name}!</h1>
            </div>
                
               
            <div className="row">
            <div className="donations">
                <Box border={1} borderColor='#2EC486'>
                <h2 className="text">Products Donated!</h2>
                <Button className="text"><Box className= "box" border={1}>View Products</Box></Button>
                </Box>
            </div>
            <div className="recycled">
                <Box border={1} borderColor='#2EC486'>
                <h2 className="text">Products Recycled!</h2>
                <Button className="text" ><Box className= "box" border={1}>View Products</Box></Button>
                </Box>
                </div>
           
            </div>
           
        </div>
    )
}