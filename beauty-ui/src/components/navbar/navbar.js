import './navbar.css';
import React from 'react';
import {Link} from 'react-router-dom';  
//import ReactDOM from 'react-dom';
import Button from "@material-ui/core/Button"

import { Box, Container, Typography, Grid, makeStyles} from "@material-ui/core"
import { useNavigate } from 'react-router';

export default function Navbar({user, isAuthenticated, logoutUser}){
    
    const navigate = useNavigate()

    const handleOnLogout = async ()=>{
        await logoutUser()
        navigate("/")
    }
    console.log(user)
    return (
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
                        <Link className="navbar-titles" to="/give">
                            Give
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar-titles" to="/">
                            Tips
                        </Link>
                    </li>
                    {user?.id? ( <Button className="logout" variant="contained" color="primary" onClick={handleOnLogout}>
                            Logout
                    </Button>):(<><Button className="login" variant="contained">
                        <Link to="/login">
                            Log In
                            </Link>
                    </Button>
                    <Button className="register" variant="contained">
                        <Link to="/register">
                            Register
                         </Link>
                    </Button></>)}
        
                </ul>
            </nav>
           </Container>
    )
}