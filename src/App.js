import logo from './logo.svg';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import More from './Component/More';
import Navbar from './Component/Navbar';
import About from './Component/About';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/about' element= {<About />} />
      <Route path='/more' element= {<More />} />


    </Routes>

    </Router>

      
    </>
  );
}

export default App;
