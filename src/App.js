import './Style/App.css';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home.js';
import Main from './Components/Main';

import Chat from './Chat/Chat';
import './Chat/Chat.css';

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
      <Chat />
    </div>
  );
}

export default App;
