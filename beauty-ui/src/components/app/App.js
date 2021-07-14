import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "../home/home";
import Navbar from "../navbar/navbar";

export default function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path = "/" element={ <Home /> }/>
                </Routes>
                
            </BrowserRouter>
        </div>
    )
}


