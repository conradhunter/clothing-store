import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/store' element={<Store/>} />
            <Route exact path='/contact' element={<Contact/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
