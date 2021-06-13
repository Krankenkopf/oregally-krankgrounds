import React from "react";
import css from "./HeroDescription.module.css";

const HeroDescription = () => {
    return (
        <div className={css.heroDesc}>
            <div style={{display: 'flex'}}>
                <h3 className={css.__h1}>H</h3>
                <h3 className={css.__i1}>I</h3>
                <h3 style={{opacity: '0'}}>_</h3>
                <h3 className={css.__a1}>A</h3>
                <h3 className={css.__l1}>L</h3>
                <h3 className={css.__l2}>L</h3>
                <h3 className={css.__exc1}>!</h3>
            </div>
            <div style={{display: 'flex'}}>
                <h1 className={css.__i2}>I</h1>
                <h1 className={css.__apo1}>'</h1>
                <h1 className={css.__m1}>M</h1>
                <h1 style={{opacity: '0'}}>_</h1>
                <h1 className={css.__r1}>R</h1>
                <h1 className={css.__o1}>O</h1>
                <h1 className={css.__m2}>M</h1>
                <h1 className={css.__a2}>A</h1>
                <h1 className={css.__n1}>N</h1>
            </div>
            <div style={{display: 'flex'}}>
                <h2 className={css.__f1}>F</h2>
                <h2 className={css.__r2}>R</h2>
                <h2 className={css.__o2}>O</h2>
                <h2 className={css.__n2}>N</h2>
                <h2 className={css.__t1}>T</h2>
                <h2 className={css.__e1}>E</h2>
                <h2 className={css.__n3}>N</h2>
                <h2 className={css.__d1}>D</h2>
                <h2 style={{opacity: '0'}}>_</h2>
                <h2 className={css.__d2}>D</h2>
                <h2 className={css.__e2}>E</h2>
                <h2 className={css.__v1}>V</h2>
                <h2 className={css.__e3}>E</h2>
                <h2 className={css.__l3}>L</h2>
                <h2 className={css.__o3}>O</h2>
                <h2 className={css.__p1}>P</h2>
                <h2 className={css.__e4}>E</h2>
                <h2 className={css.__r3}>R</h2>
            </div>
        </div>
    )
}
export default HeroDescription