import React, {FC, useEffect, useState} from "react";
import Content from "./Content";

export type TContentContainerProps = {
    scrollDistance: number
    setDynamicBg: (status: boolean) => void
}

enum triggers {
    'initial' = 200,
    'hookGreeting' = 400,
    'girlsAppearance' = 800,
    'chuckAppearance' = 1200,
    'greetingFade' = 1400,
    'secondSplash' = 1650,
    'secondSplashStand' = 1900,
    'secondSplashFade' = 2000,
    'thirdSplash' = 2100,
    'thirdSplashStand' = 2350,
    'thirdSplashMove' = 2550,
    'thirdSplashSecondStand' = 2600,
}

export type TTrigger = Extract<keyof typeof triggers, string>

const ContentContainer: FC<TContentContainerProps> = (props) => {
    const {scrollDistance, setDynamicBg} = props

    // content behavior trigger settings
    // risk of inf cycle rendering
    // think twice before manipulating
    const [trigger, setTrigger] = useState<TTrigger>('initial')
    if (scrollDistance<triggers.initial
        && Object.values(triggers)[0] !== trigger) setTrigger('initial')

    else if (scrollDistance>=triggers.initial
        && scrollDistance<triggers.hookGreeting
        && Object.values(triggers)[1] !== trigger) setTrigger('hookGreeting')

    else if (scrollDistance>=triggers.hookGreeting
        && scrollDistance<triggers.girlsAppearance
        && Object.values(triggers)[2] !== trigger) setTrigger('girlsAppearance')

    else if (scrollDistance>=triggers.girlsAppearance
        && scrollDistance<triggers.chuckAppearance
        && Object.values(triggers)[3] !== trigger) setTrigger('chuckAppearance')

    else if (scrollDistance>=triggers.chuckAppearance
        && scrollDistance<triggers.greetingFade
        && Object.values(triggers)[4] !== trigger) setTrigger('greetingFade')

    else if (scrollDistance>=triggers.greetingFade
        && scrollDistance<triggers.secondSplash
        && Object.values(triggers)[5] !== trigger) setTrigger('secondSplash')

    else if (scrollDistance>=triggers.secondSplash
        && scrollDistance<triggers.secondSplashStand
        && Object.values(triggers)[6] !== trigger) setTrigger('secondSplashStand')

    else if (scrollDistance>=triggers.secondSplashStand
        && scrollDistance<triggers.secondSplashFade
        && Object.values(triggers)[7] !== trigger) setTrigger('secondSplashFade')

    else if (scrollDistance>=triggers.secondSplashFade
        && scrollDistance<triggers.thirdSplash
        && Object.values(triggers)[8] !== trigger) setTrigger('thirdSplash')

    else if (scrollDistance>=triggers.thirdSplash
        && scrollDistance<triggers.thirdSplashStand
        && Object.values(triggers)[9] !== trigger) setTrigger('thirdSplashStand')

    else if (scrollDistance>=triggers.thirdSplashStand
        && scrollDistance<triggers.thirdSplashMove
        && Object.values(triggers)[10] !== trigger) setTrigger('thirdSplashMove')

    else if (scrollDistance>=triggers.thirdSplashMove
        && scrollDistance<triggers.thirdSplashSecondStand
        && Object.values(triggers)[11] !== trigger) setTrigger('thirdSplashSecondStand')


    //---------------------------
    useEffect(() => {
        setDynamicBg(true)
        return () => setDynamicBg(false)
    }, [setDynamicBg])

    return <>
        <div style={{position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '10vw'}}> {scrollDistance} </div>
        <Content trigger={trigger} scrollDistance={scrollDistance}/>
        </>
}
export default ContentContainer;
