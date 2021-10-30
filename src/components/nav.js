//import react from "react";
import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <div id="main">
                <ul id="nav-items">
                    <li id="nav-item"><a>Home</a></li>
                    <li id="break">|</li>
                    <li id="nav-item"><a>About</a></li>
                    <li id="break">|</li>
                    <li id="nav-item" class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Raw</a>
                            <div class="dropdown-content">
                                <a href="#">Helmets</a>
                                <a href="#">Armor</a>
                                <a href="#">Figures</a>
                            </div>
                    </li>
                    <li id="break">|</li>
                    <li id="nav-item" class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Finished</a>
                            <div class="dropdown-content">
                                <a href="#">Helmets</a>
                                <a href="#">Armor</a>
                                <a href="#">Figures</a>
                            </div>
                    </li>
                </ul>
            </div>
        )
    }
}