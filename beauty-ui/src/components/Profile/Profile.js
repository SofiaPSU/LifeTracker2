import "./Profile.css"
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import AssignmentIcon from '@material-ui/icons/Assignment'
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
                <h1>Welcome, {user.first_name}!</h1>
            </Box>
            <Box className="avatar">
                <div className={classes.root}>
                    <Avatar src="/broken-image.jpg" />
                </div>
            </Box>
            <Box>
                <h2>{user.username}</h2>
                <h2>{user.age}</h2>
                <h2>{user.zip_code}</h2>
                <h2>{user.email}</h2>
                <h2>Settings</h2>
                <h2>Log Out</h2>
            </Box>
        </Container>
    )
}