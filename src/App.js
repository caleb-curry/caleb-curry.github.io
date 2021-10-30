//import react from 'react';
import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      // Wraps entire page
      <div id="main">
        {/* Navigation bar at top of page*/}
        <div id="nav">
          <Nav></Nav>
        </div>
        {/* Header of the page*/}
        <div id="header">
          <Header></Header>
        </div>
        {/* Main body of the page*/}
        <div id="body">
          <Body></Body>
        </div>
        {/* Footer at bottom of page*/}
        <div id="footer">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
