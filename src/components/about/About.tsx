import React, {FC, useEffect} from "react";
import css from "./About.module.css"
import {TBgType} from "../common/Background";

type TAboutProps = {
    setBgType: (type: TBgType) => void
}

const About: FC<TAboutProps> = ({setBgType}) => {
    useEffect(() => {
        setBgType('b&w')
        return () => setBgType('color')
    }, [setBgType])

    return <div className={css.aboutPageContainer}>
        <a href='#' className={css.burger}>
            <div className={css.burgerLine__1}> </div>
            <div className={css.burgerLine__2}> </div>
            <div className={css.burgerLine__3}> </div>
        </a>
        <div className={css.heroDesc}>
            <h4>Hi, I'm</h4>
            <h2>Roman Khomets</h2>
            <h2>Front-end developer</h2>
        </div>
    </div>
}

export default About