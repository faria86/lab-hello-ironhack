import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav id="my-nav">
          <img src="images/ironhack-logo.svg" alt="logo"></img>
          <img src="images/menu-top.svg" alt="secondlogo"></img>
        </nav>
        <header className="App-header">
          <h1>Say hello to <br/>ReactJS</h1>
          <p>
            You will learn a Frontend <br/>framework from scratch, to <br/>became an Ninka Developer.
          </p>
          <button class="my-button">Awsome!</button>
        </header>
        <div class="main-div">
            <div class="declarative">
              <img src="images/icon1.png" alt=""></img>
              <h2>Declarative</h2>
              <article>React makes it<br/> painless to create<br/>interactive UIs.</article>
            </div>
            <div class="components">
              <img src="images/icon2.png" alt=""></img>
              <h2>Components</h2>
              <article>Build encapsulated<br/> components that<br/>manage their state.</article>
            </div>
            <div class="single-way">
              <img src="images/icon3.png" alt=""></img>
              <h2>Single-Way</h2>
              <article>A set of immutable<br/> values are passed to<br/>the component's.</article>
            </div>
            <div class="jsx">
              <img src="images/icon4.png" alt=""></img>
              <h2>JSX</h2>
              <article>Statically-typed<br/> design to run on modern<br/>modern browser's.</article>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
