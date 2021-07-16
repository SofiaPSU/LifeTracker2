import './navbar.css';
import React from 'react';
import {Link} from 'react-router-dom';  
import ReactDOM from 'react-dom';
import Button from "@material-ui/core/Button"

import { Box, Container, Typography, Grid, makeStyles} from "@material-ui/core"

// const useStyles = makeStyles((theme) => ({
//     wrapper: {
//         width: '100vw',
//         background: 
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//       },
//       title: {
//         fontFamily: "Euclid Circular A",
//         fontStyle: "normal",
//         fontWeight: "bold",
//         fontSize: 85,
//         letterSpacing: "-0.015em",
//         color: "#8F5338",
//       },
// })

import { useNavigate } from 'react-router';


export default function Navbar({user, isAuthenticated, logoutUser}){
    const navigate = useNavigate()

    const handleOnLogout = async () =>{
        await logoutUser(
            navigate("/")
        )
    }
    return (

      //  <div>
         <Container style={{ backgroundColor: '#FFFFFF', height: '10vh'}}>
            <nav>
                <ul>
                    <li>
                       <Link className="navbar-titles" to="/">
                            Hīrā
                            </Link>
                    </li>
                    <li>
                        <Link className="navbar-titles" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar-titles" to="/give">
                            Give
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar-titles" to="/">
                            Tips
                        </Link>
                    </li>
        
                    {isAuthenticated?( <Button className="logout" variant="contained" color="primary" onClick={handleOnLogout}>
                            Logout
                    </Button>):(<><Button className="login" variant="contained" color="primary">
                        <Link to="/login">
                            Log In
                            </Link>
                    </Button>

                    <Button className="register" variant="contained" color="primary">
                        <Link to="/register">
                            Register
                         </Link>
                    </Button></>)}
                   
                </ul>
            </nav>
           </Container>
        //</div>
    )
}