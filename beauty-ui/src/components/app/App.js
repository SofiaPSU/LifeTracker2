import { BrowserRouter, Routes, Route } from "react-router-dom"
import Give from '../give/give';
import './App.css';


export default function App() {

    return(
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/give" element={ <Give /> }/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


