import React, { Component } from 'react'
import {
    Routes,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
export default class Nav extends Component {
    render() {
        return (
            //menu
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <NavLink className="navbar-brand js-scroll-trigger" to="/">React-Router</NavLink>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link js-scroll-trigger" to="/gioithieu">Giới thiệu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link js-scroll-trigger" to="/duan">Dự án</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link js-scroll-trigger" to="/contact">Liên hệ</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            //end menu
        )
    }
}
