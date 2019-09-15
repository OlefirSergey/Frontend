import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';


class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Добро пожаловать в мое портфолио <br></br> по Реакту :)</h1>
          </header>
          <div class= "container">
    <nav class="navbar navbar-expand-lg navbar-black bg-red">
        <button class="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Дом <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Задание 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Задание 2</a>
                    </li>
                </ul>
                        <form class="form-inline my-2 my-sm-0">
                          <input class="form-control mr-sm-2" type="search" placeholder="Что найти?" aria-label="Search"></input>
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
                        </form>
            </div>
          </nav>
          </div>
      </div>
    );
  }
}

export default App;
