import css from './Header.module.css';
import logo from './../assets/png/oregallyLogoSmall.png'
import {NavLink} from "react-router-dom";
import React from "react";
import cn from 'classnames'

const Header = () => {
    const logoClassName = cn(css.navlink, css.logo)
    const loginClassName = cn(css.navlink, css.login)
    return (
        <header className={css.header}>
            <div className={css.headerElements}>
                <NavLink className={logoClassName}
                         to="/main">
                    <div>
                        <img src={logo} alt={'logo'}/>
                    </div>
                </NavLink>
                <NavLink className={css.navlink}
                         style={{gridArea: 'link1'}}
                    to="/store">
                    <h3>Store</h3>
                </NavLink>
                <NavLink className={css.navlink}
                         style={{gridArea: 'link2'}}
                    to="/services">
                    <h3>Services</h3>
                </NavLink>
                <NavLink className={css.navlink}
                         style={{gridArea: 'link3'}}
                    to="/FAQ">
                    <h3>FAQ</h3>
                </NavLink>
                <NavLink className={css.navlink}
                         style={{gridArea: 'link4'}}
                         to="/promo">
                    <h3>Promo</h3>
                </NavLink>
                <NavLink className={css.navlink}
                         style={{gridArea: 'link5'}}
                         to="/vacancies">
                    <h3>Vacancies</h3>
                </NavLink>
                <NavLink className={css.navlink}
                         style={{gridArea: 'link6'}}
                         to="/about">
                    <h3>About us</h3>
                </NavLink>
                <div className={loginClassName}>
                    <NavLink to={"/signup"}>
                        <h3>Sign up</h3>
                    </NavLink>
                    <NavLink to={"/login"}>
                        <h3>Login</h3>
                    </NavLink>
                </div>
            </div>
            <div className={css.headerArrow}>▼</div>
        </header>
    )
}

export default Header;