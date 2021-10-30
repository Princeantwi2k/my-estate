
import './App.css';
import About from './Component/About us/About';
import Caro from './Component/Caro/Caro';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router >
      <Navbar />
      <Home />
      <Caro />
      <Footer />
      </Router>

   

    </div>
  );
}

export default App;
