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




export default function Navbar(){
    return (
  
        // <div className="navBar">
            <Container style={{ backgroundColor: '#FFFFFF', height: '10vh'}}>
                <nav>
                    <ul className="navbar-titles">
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
                            <Link className="navbar-titles" to="/">
                                Give
                            </Link>
                        </li>
                        <li>
                            <Link className="navbar-titles" to="/">
                                Tips
                            </Link>
                        </li>
                        <Button className="login" variant="contained">
                            <Link className="navbar-titles" to="/">
                                Log In
                            </Link>
                        </Button>
                        <Button className="register" variant="contained">
                            <Link className="navbar-titles" to="/">
                                Register
                            </Link>
                        </Button>
                    </ul>
                </nav>
            </Container>
        // </div>
    )
}