import React from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Random from './Pages/Random';
import Header from './Components/Header';

class App extends React.Component {
  constructor(){
    super();
    
  };

  render() {  
    return (
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/random" component={Random} />
      </Router>
      
    );
  }
}

export default App;