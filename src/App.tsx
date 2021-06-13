import React, {FC, useEffect, useRef, useState} from 'react';
import css from './App.module.css';
import HeaderContainer from "./components/HeaderContainer";
import Footer from "./components/Footer";
import ContentContainer from "./components/main/ContentContainer";
import {BrowserRouter, Route} from "react-router-dom";
import StoreContainer from './components/store/StoreContainer';
import About from "./components/about/About";
import Background, {TBgType} from "./components/common/Background";

export const PATH = {
    MAIN: '/main',
    STORE: '/store',
    SERVICES: '/services',
    FAQ: '/FAQ',
    PROMO: '/promo',
    VACANCIES: '/vacancies',
    ABOUT: '/about',
    LOGIN: '/login',
    SIGNUP: '/signup',
}

const App = () => {

    const [dynamicBg, setDynamicBg] = useState<boolean>(false)
    const [bgType, setBgType] = useState<TBgType>('color')

    //scrollEventListener
    const [scrollDistance, setScrollDistance] = useState<number>(0);
    const handleScroll = (e: Event) => {
        const position = Math.ceil(window.scrollY/2);
        setScrollDistance(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <BrowserRouter>
            <div>
                <div className={css.appShell} >
                    <HeaderContainer/>
                    <Route path={PATH.MAIN} render={() => (
                        <ContentContainer scrollDistance={scrollDistance} setDynamicBg={setDynamicBg}/>
                        )}/>
                    <Route path={PATH.STORE} exact render={() => (<StoreContainer />)} />
                    <Route path={PATH.ABOUT} exact render={() => (<About scrollDistance={scrollDistance} setBgType={setBgType}/>)} />
                    <Footer />
                </div>
                <Background scrollDistance={scrollDistance} dynamicBg={dynamicBg} bgType={bgType}/>
                <div style={{height: '10000px'}} className={css.scrollPage}> </div>
            </div>
        </BrowserRouter>
    );
}



export default App;
