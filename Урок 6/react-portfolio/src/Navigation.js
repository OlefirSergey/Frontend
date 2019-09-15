import React, { Component } from 'react';
//import './Navigation.css';

class Navigation extends Component {
    render(){
      return (
<div className= "container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Дом <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Услуги</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Каталог
                        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Товары по акции</a>
                                <a class="dropdown-item" href="#">Товары по подписке</a>
                                    <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Другое</a>
                            </div>
                    </li>
                </ul>
                        <form class="form-inline my-2 my-sm-0">
                          <input class="form-control mr-sm-2" type="search" placeholder="Что найти?" aria-label="Search"></input>
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
                        </form>
            </div>
    </nav>
</div>
    );
  }
}
export default Navigation;