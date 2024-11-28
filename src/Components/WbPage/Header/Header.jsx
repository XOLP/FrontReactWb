import React from "react";
import "./Header.css"
import Bread from "../Bread/Bread";
import logo from "/src/assets/logo.png"


function Header(){
    return(
        <React.Fragment>
            <header class="header">
                <img  src={logo} alt="логотип" class="logo"/>
                <nav class="header_nav"></nav>
                <ul class="header_list">
                    <li><a href="/">Главная</a> </li>
                    <li><a href="/wildberries">Wildberries</a> </li>
                    <li><a href="/avito">Avito</a> </li>
                    <li><a href="/profile">Профиль</a> </li>
                </ul>
            </header>
            <Bread />

        </React.Fragment>
    )
}
export default Header