import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Questions from './pages/Questions'
import Results from './pages/Results'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
    const [isMounted, setIsMounted] = useState(false)
    const [showLogin, setShowLogin] = useState(false)

    function toggleLogin() {
        setIsMounted(prevMounted => !prevMounted)
        if (!showLogin) setShowLogin(true)
    }

    const mountedStyle = {
        animation: "inAnimation 250ms ease-in"
    }
    const unmountedStyle = {
        animation: "outAnimation 270ms ease-out",
        animationFillMode: "forwards"
    }

    return (
    <Router>
        <Navbar toggleLogin={toggleLogin}/>
        {
            showLogin && 
            <div 
                onAnimationEnd={() => {
                    if (!isMounted) setShowLogin(false);
                }}
            >
                <Login toggleLogin={toggleLogin} isShown={showLogin}/>
                <div 
                    className="modal--backdrop"
                    style={isMounted ? mountedStyle : unmountedStyle}
                    onClick={() => {
                        setShowLogin(prevLogin => !prevLogin)
                        toggleLogin()
                    }}
                ></div>
            </div>
        }
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/questions' element={<Questions/>} />
            <Route path='/results' element={<Results/>} />
            <Route path='/signup' element={<Signup toggleLogin={toggleLogin}/>} />
        </Routes>
    </Router>
    );
}

export default App;
