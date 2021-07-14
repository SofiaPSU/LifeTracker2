import { BrowserRouter, Routes, Route } from "react-router-dom"
import Give from '../give/give';
import './App.css';
import Home from '../home/home';
import Navbar from '../navbar/navbar';

export default function App() {

    return(
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/give" element={ <Give /> }/>
                    <Route path="/" element={ <Home /> }/>
                </Routes>
                
            </BrowserRouter>
        </div>
    )
}


