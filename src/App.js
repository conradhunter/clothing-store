import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        test
        <br></br>
        test
        <br></br>
        test
        <br></br>
        test
        <br></br>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
