import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Questions from './pages/Questions'
import Results from './pages/Results'

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/questions' element={<Questions/>} />
          <Route path='/results' element={<Results/>} />
      </Routes>
    </Router>
  );
}

export default App;
