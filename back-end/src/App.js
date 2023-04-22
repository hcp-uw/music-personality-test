import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Questions from './pages/Questions'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/questions' element={<Questions/>} />
      </Routes>
    </Router>
  );
}

export default App;
