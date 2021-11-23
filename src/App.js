
import './App.css';

import Caro from './Component/Caro/Caro';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar';

import {BrowserRouter as Router} from 'react-router-dom';

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
