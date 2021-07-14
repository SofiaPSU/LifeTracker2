import { BrowserRouter, Routes, Route } from "react-router-dom"
import Give from '../give/give';
import './App.css';
import Home from '../home/home';
import Navbar from '../navbar/navbar';
import Register from "../Register/Register";
import Login from "../Login/Login"

export default function App() {

    return(
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/give" element={ <Give /> }/>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/register" element={ <Register />}/>
                    <Route path="/login" element={ <Login />}/>
                </Routes>
                
            </BrowserRouter>
        </div>
    )
}


