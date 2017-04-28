import React, { Component } from 'react';
import logo from './logo.svg';
import './css/pure-min.css';
import './css/side-menu.css';
import './css/App.css';

import Register from './comps/register';
import Table from './comps/table';

class App extends Component {

  render() {
    return (
      <div id="layout">
        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">
              <img src={logo} className="App-logo" alt="logo" />
            </a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livros</a></li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>React</h1>
          </div>
          
          <div className="content" id="content">
            <Register />
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
