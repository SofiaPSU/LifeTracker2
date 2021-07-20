import "./Profile.css"
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange, green } from '@material-ui/core/colors'


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
        <Container className= "profile">
            <Box className="welcome">
                <h1 className="text">Welcome, {user.first_name}!</h1>
            </Box>
            <Container>
            <Box>
                <div className={classes.root}>
                    <Avatar src="/broken-image.jpg" />
                </div>
          
                <div className={classes.root}>
                <h2 className="text">{user.username}</h2>
                <h2 className="text">{user.age}</h2>
                <h2 className="text">{user.zip_code}</h2>
                <h2 className="text">{user.email}</h2>
                <h2 className="text">Settings</h2>
                <h2 className="text">Log Out</h2>
                </div>
            </Box>
            </Container>
            <Container>
            <Box>
                <h2 className="text">Products Donated!</h2>
            </Box>
            <Box>
                <h2 className="text">Products Recycled!</h2>
            </Box>
            </Container>
        </Container>
    )
}