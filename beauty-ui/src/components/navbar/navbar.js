import './navbar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function Navbar({user, isAuthenticated, logoutUser}){
    const navigate = useNavigate()

    const handleOnLogout = async () =>{
        await logoutUser(
            navigate("/")
        )
    }
    return (
        <div>
            <nav>
                <ul>
                    <li>
                       <Link to="/">
                            Hīrā
                            </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/give">
                            Give
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
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
        </div>
    )
}