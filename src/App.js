import './App.css';
//import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Questions from './pages/Questions'
import Results from './pages/Results'
import Login from './components/Login'
import React from "react";
// function App() {
//     const [isMounted, setIsMounted] = useState(false)
//     const [showLogin, setShowLogin] = useState(false)

//     function toggleLogin() {
//         setIsMounted(prevMounted => !prevMounted)
//         if (!showLogin) setShowLogin(true)
//     }

//     const mountedStyle = {
//         animation: "inAnimation 250ms ease-in"
//     }
//     const unmountedStyle = {
//         animation: "outAnimation 270ms ease-out",
//         animationFillMode: "forwards"
//     }

//     return (
//         <div>
//         <Navbar toggleLogin={toggleLogin}/>

//         <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/questions' element={<Questions/>} />
//             <Route path='/results' element={<Results/>} />
//         </Routes>
//         </div>
//     //</Router>
//     );
// }



class App extends React.Component {
    render() {
        return (
            <div>
            <Navbar/>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/questions' element={<Questions/>} />
                <Route path='/results' element={<Results/>} />
            </Routes>
        </div>
        )
    }
}
export default App;