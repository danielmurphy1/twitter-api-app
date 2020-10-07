import React from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Random from './Pages/Random';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/random">Random</Link></li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/random" component={Random} />
      </div>
    </Router>
    
  );
}

export default App;
