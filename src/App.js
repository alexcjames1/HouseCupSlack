import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from './routes';
import { Audentio } from './routes';
import { Download } from './routes';
import './css/style.scss';

function App() {
  return (
      <div className="App">
          <Router>
               <Route exact path="/" component={Home} />
               <Route exact path="/audentio" component={Audentio} />
               <Route exact path="/download" component={Download} />
           </Router>
      </div>
  );
}

export default App;
