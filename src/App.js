import react from 'react';
import './App.css';

import About from './components/About';
import Home from './components/HomeStuff/Home';
import Tech from './components/TechStuff/Tech';
import Contact from './components/ContactStuff/Contact';

import ElloBot from './components/ElloBot';
import Navvy from './Navbar';
import Team from './components/Team/Team';
import {Route,Link} from 'react-router-dom';
import Bot from './components/botstuff/ChatBot'



function App() {
  return (
    <>
    <Navvy/>
    <Route exact path="/ElloBot" component={ElloBot}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Tech" component={Tech}/>
    <Route exact path="/Contact" component={Contact}/>
    
    <Route exact path="/Team" component={Team}/>
    <Route exact path="/Team" component={Team}/>
    <Route exact path='/Bot' component={Bot}/>
    


    </>
  );
}

export default App;
