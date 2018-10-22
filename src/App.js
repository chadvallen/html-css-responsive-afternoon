import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';

class App extends Component {
  render() {
    return (
      <div>
        <div className="body">
        <Header />
        <Banner />
        </div>
      </div>
    );
  }
}

export default App;
