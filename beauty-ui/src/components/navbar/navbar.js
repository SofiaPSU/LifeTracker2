import './navbar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"

export default function Navbar(){
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            Hīrā
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/give">
                            Give
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Tips
                        </a>
                    </li>
                    <Button className="login" variant="contained" color="default">
                        <a href="/login">
                            Log In
                        </a>
                    </Button>
                    <Button className="register" variant="contained" color="default">
                        <a href="/register">
                            Register
                        </a>
                    </Button>
                </ul>
            </nav>
        </div>
    )
}