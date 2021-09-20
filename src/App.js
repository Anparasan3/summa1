import './Style/App.css';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home.js';
import Main from './Components/Main'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/plugin-content' component={Home} exact />
          <Route path='/plugin-content/search' component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
