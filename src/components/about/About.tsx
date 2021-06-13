import React, {CSSProperties, FC, useEffect} from "react";
import css from "./About.module.css"
import {TBgType} from "../common/Background";
import photo1 from "../../assets/about/img_1.jpg"
import photo2 from "../../assets/about/img_2.jpg"
import photo3 from "../../assets/about/img_3.jpg"
import photo4 from "../../assets/about/img_4.jpg"
import photo5 from "../../assets/about/img_5.jpg"

import HeroDescription from "./heroDescription/HeroDescription";
import SkillCardsM from "./skillsCards/SkillCardsM";
import BurgerMenu from "./burgerMenu/BurgerMenu";

type TAboutProps = {
    scrollDistance: number
    setBgType: (type: TBgType) => void
}

const About: FC<TAboutProps> = ({scrollDistance, setBgType}) => {
    useEffect(() => {
        setBgType('b&w')
        return () => setBgType('color')
    }, [setBgType])

    const heroSectDescStyle = () => {
        switch (true) {
            case scrollDistance < 400:
                return {
                    transition: 'all 500ms 0s',
                    marginLeft: `${-scrollDistance / 2}px`,
                    transform: `skew(${scrollDistance / 50}deg, ${-scrollDistance / 50}deg)`,
                } as CSSProperties
            default: return {}
        }
    }

    const heroSectCarouselStyle = () => {
        switch (true) {
            case scrollDistance < 400:
                return {
                    transition: 'all 500ms 0s',
                    marginTop: `${-scrollDistance * 4}px`,
                    marginRight: `${-scrollDistance / 2}px`,
                    transform: `skew(${-scrollDistance / 20}deg, ${scrollDistance / 20}deg)`,
                } as CSSProperties
            default:
                return {marginTop: `${-scrollDistance * 4-1600}px`,}
        }
    }
    const heroSectStyle = () => {
        return {
            transition: 'all 300ms 0s',
            marginTop: `${-scrollDistance * 2}px`,

        } as CSSProperties
    }
    const skillsSectStyle = () => {
        return {
            transition: 'all 300ms 0s',
            marginTop: `${scrollDistance * 2 - 100}px`,
        } as CSSProperties
    }

    return <div className={css.aboutPageContainer}>
        <BurgerMenu />
        <div className={css.aboutHeader}>
            <div>{scrollDistance} </div>
        </div>
        <section style={heroSectStyle()} className={css.section_1}>
            <div style={heroSectDescStyle()}>
                <HeroDescription/>
            </div>

            <div style={heroSectCarouselStyle()} className={css.heroCarousel}>
                <div style={{width: '400px'}}>
                    <img src={photo1} className={css.heroPhoto} alt={'img_1'}/>
                </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
        </section>
        <section style={skillsSectStyle()} className={css.section_2}>
            <div className={css.section_2__title}>
                <h1>My skills</h1>
            </div>
            <div className={css.section_2__skillsContainer} style={{}}>
                <SkillCardsM scrollDistance={scrollDistance} />
            </div>
        </section>
    </div>
}

export default About