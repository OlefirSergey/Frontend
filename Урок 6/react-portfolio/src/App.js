import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Добро пожаловать в мое портфолио <br></br> по Реакту :)
          </h1>
        </header>
        <div class="container-flued">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Дом <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Задание 1 тут должно было быть :)
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Задание 2 тут тоже должно было быть:)
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Ну а тут, и дальше тоже должны были быть остальные задания:)
                  </a>
                </li>
              </ul>
              <form class="form-inline my-2 my-sm-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Что найти?"
                  aria-label="Search"
                ></input>
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Поиск
                </button>
              </form>
            </div>
          </nav>
          <h2
            className="triggered"
            data-aos="fade-right"
            data-aos-anchor="#trigger-left"
          >
            special for Dmitriy Baldykov
          </h2>
          <section
            className="nth-child-1"
            data-aos="fade-zoom-in"
            data-aos-delay="100"
          >
            <h2>
              <img
                src="img/lesen1.jpg"
                data-aos="fade-zoom-in"
                data-aos-delay="100"
              />
            </h2>
          </section>
          <section
            className="nth-child-2"
            data-aos="zoom-outup"
            data-aos-duration="3000"
          >
            <h2 data-aos="zoom-outup" data-aos-duration="3000">
              <img src="img/lesen11.jpg" />
            </h2>
          </section>
          <section className="nth-child-3" data-aos="slide-right">
            <h2 data-aos="slide-right">
              <img src="img/lesen2.jpg" />
            </h2>
          </section>
          <section
            className="nth-child-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h2
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              id="trigger-right"
            >
              <img src="img/lesen22.jpg" />
            </h2>
          </section>
          <section
            className="nth-child-5"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <h2 data-aos="flip-up" data-aos-duration="2000">
              <img src="img/lesen3.jpg" />
            </h2>
          </section>
          <section
            className="nth-child-6"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <h2 data-aos="zoom-in-down" data-aos-duration="2000">
              <img src="img/lesen33.jpg" />
            </h2>
          </section>
          <section
            className="nth-child-7"
            data-aos="fade-up-left"
            data-aos-anchor-placement="center-center"
            data-aos-duration="2000"
          >
            <h2
              data-aos="fade-up-left"
              data-aos-anchor-placement="center-center"
              data-aos-duration="2000"
            >
              <img src="img/lesen333.jpg" />
            </h2>
          </section>
          <section
            className="nth-child-8"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            <h2 data-aos="fade-up-right" data-aos-duration="2000">
              <img src="img/lesen333.jpg" />
            </h2>
          </section>
          <section
            className="nth-child-9"
            data-aos="fade-down-left"
            data-aos-duration="2000"
          >
            <h2 data-aos="fade-down-left" data-aos-duration="2000">
              <img src="img/lesen3333.jpg" />
            </h2>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
