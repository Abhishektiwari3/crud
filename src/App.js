import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import { Router, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
    
    <Router>
      <Route exact path='/' Component={<Home/>}/>
      <Route path='/home' Component={<Register />}/>
    </Router>
    </>
  );
}

export default App;
