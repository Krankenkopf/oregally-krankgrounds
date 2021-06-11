import css from "./Content.module.css";
import girl1 from "../../assets/png/girl_1.png"
import girl2 from "../../assets/png/girl_2.png"
import dog from "../../assets/png/dog.png"
import React, {CSSProperties, FC, useEffect, useState} from "react";
import Fog from "./decors/Fog";
import {TTrigger} from "./ContentContainer";


type TContentProps = {
    trigger: TTrigger
    scrollDistance: number
}

const Content: FC<TContentProps> = (props) => {
    const {trigger, scrollDistance} = props

    const [dots, setDot] = useState<Array<boolean>>([false, false, false])
    useEffect(() => {
        const count = dots.filter(d => d).length // all true = 3
        const setCurrentDot = (count: number) => {
            setDot(dots.map((d, i) => {
                return count === i ? !d : d
            }))
        }
        count === 3
            ? setTimeout(() => setDot([false, false, false]), 500)
            : setTimeout(() => setCurrentDot(count), 500)
        return clearTimeout()                                // need to be fixed!!!!
    }, [dots, setDot])
    const mappedDots = dots.map((d, i) => d
        ? <span key={i} style={{color: 'rgba(0, 0, 0, 1)'}}>.</span>
        : <span key={i} style={{color: 'rgba(0, 0, 0, 0)'}}>.</span>)

    const scrollSpeedStyle = scrollDistance >= 100
        ? {transition: "all 50ms 1ms", transform: `translateY(-${scrollDistance/5-10}px)`}
        : {transition: "all 50ms 1ms", transform: `translateY(-${scrollDistance/10}px)`}
    const leftGirlStyle = () => {
        switch (trigger) {
            case 'girlsAppearance': return {
                opacity: `${(scrollDistance*4-1600)/1000}`,
                transform: `translateY(-${scrollDistance/10}px)`
            }
            case 'chuckAppearance': return {
                transform: `translateY(-${scrollDistance/10}px)`
            }
            case 'greetingFade': return {
                opacity: `${(1400-scrollDistance)/500}`,
                transform: `translate3d(${(1200-scrollDistance)/2}px, -${120+Math.pow(scrollDistance-1200, 2)/100}px, 0)`
            }
            default: return {}
        }
    }
    const rightGirlStyle = () => {
        switch (trigger) {
            case 'girlsAppearance': return {
                opacity: `${(scrollDistance*4-1600)/1000}`,
                transform: `translateY(-${scrollDistance/10}px)`
            }
            case 'chuckAppearance': return {
                transform: `translateY(-${scrollDistance/10}px)`
            }
            case 'greetingFade': return {
                opacity: `${(1400-scrollDistance)/500}`,
                transform: `translate3d(${-(1200-scrollDistance)/2}px, -${120+Math.pow(scrollDistance-1200, 2)/100}px, 0)`
            }
            default: return {}
        }
    }

    const chuckStyle = () => {
        switch (trigger) {
            case 'chuckAppearance': return {
                transform: `translateY(-${scrollDistance/10}px)`
            }
            case 'greetingFade': return {
                opacity: `${(1400-scrollDistance)/100}`,
                transform: `translateY(-${120+Math.pow(scrollDistance-1200, 2)/200}px) scale(${(scrollDistance-1200)/100+1})`
            }
            default: return {}
            }
    }

    const secondSplashStyle = () => {
        switch (trigger) {
            case 'greetingFade': return {

                gridArea: 'splash',
                margin: '10px 1vw 2vw',
                opacity: `${(scrollDistance*4-5200)/1000}`,
                transform: `translateY(-${-120+scrollDistance/10}px) scale(${(scrollDistance-1300)/100})`
            }
            case 'secondSplash': return {
                Position: 'absolute',
                gridArea: 'splash',
                margin: `${-(scrollDistance-1400)/2+10}px 1vw 2vw`,
                opacity: '1',
                transform: `translateY(${120-140-(scrollDistance-1400)/15}px) scale(${1.4})`,
                transition: "all 1ms 0",
            }
            case 'secondSplashStand': return {
                Position: 'absolute',
                gridArea: 'splash',
                margin: `${-115}px 1vw 2vw`,
                opacity: '1',
                transform: `translateY(${120-140 -17-(scrollDistance-1400)/1000}px) scale(${1.4})`
            }
            case 'secondSplashFade': return {
                Position: 'absolute',
                gridArea: 'splash',
                margin: `${-115}px 1vw 2vw`,
                opacity: '1',
                transform: `translate3d(0, ${120-140-17-(scrollDistance-1400)/1000}px, 0) scale(${1.4})`
            }
            default: return {}
        }
    }

    const thirdSplashStyle = () => {
        switch (trigger) {
            case 'thirdSplash': return {
                gridArea: 'splash',
                margin: `${-165}px 1vw 2vw`,
                opacity: '1',
                transform: `translate3d(0, ${(scrollDistance-1400)/1000}px, 0) scale(${1.4})`
            }
            case 'thirdSplashStand': return {
                gridArea: 'splash',
                margin: `${-165}px 1vw 2vw`,
                opacity: '1',
                transform: `translate3d(0, ${(scrollDistance-2100)/1.5}px, 0) scale(${1.4})`,

            }
            case 'thirdSplashMove': return {
                gridArea: 'splash',
                margin: `${-165}px 1vw 2vw`,
                opacity: '1',
                transform: `translate3d(${(scrollDistance-2350)/2}px, ${-(scrollDistance-2350)/1.25+167}px, 0) scale(${1.4})`,
            } as CSSProperties
            case "thirdSplashSecondStand": return {
                gridArea: 'splash',
                margin: `${-165}px 1vw 2vw`,
                opacity: '1',
                transform: `translate3d(${-250}px, ${7}px, 0) scale(${1.4})`,
                textAlign: 'right',
            } as CSSProperties
            default: return {}
        }
    }

    const mainPageStyle = () => {
        switch (trigger) {
            case 'secondSplash': return {
                marginTop: `${(scrollDistance-1400)/1.5 -142}px`,
                height: `${3500-scrollDistance*2}px`,
            }
            case 'secondSplashStand': return {
                marginTop: `${25}px`,
                height: `${200}px`,
            }
            case 'secondSplashFade': return {
                marginTop: `${25}px`,
                height: `${200}px`,
                transform: `translateX(${-(scrollDistance-1900)*10}px)`
            }
            case 'thirdSplash': return {
                marginTop: `${25}px`,
                height: `${200}px`,
                transform: `translateX(${-(scrollDistance-1900)*10+2000}px)`
            }
            case 'thirdSplashStand': return {
                marginTop: `${(-scrollDistance+2100)/1.5+25}px`,
                height: `${-4200+scrollDistance*2+200}px`,

            }
            case 'thirdSplashMove': return {
           /*     marginTop: `${(-scrollDistance+2100)/1.5+25}px`,
                height: `${-4200+scrollDistance*2+200}px`,*/
            }
            default: return {}
        }
    }

    const hedgehogStyle = () => {
        switch (trigger) {
            case 'thirdSplash': return {
                opacity: 0,
            }
            case 'thirdSplashStand': return {}
            case 'thirdSplashMove': return {
                Position: 'absolute',
                transform: `translate3d(${-(scrollDistance * 4 - 9400) / 50}px, 
                ${-(scrollDistance * 4 - 9400) / 20}px, 0) scale(${0.2})`,
            }
            default: return {}
        }
    }

    return (
        <div style={mainPageStyle()} className={css.mainPageContainer}>
            <Fog scrollDistance={scrollDistance} trigger={trigger} />
            <div className={css.greetingPage}>
                <span style={scrollSpeedStyle} className={css.splash}>
                    {(trigger === 'initial'
                    || trigger === 'hookGreeting'
                    || trigger === 'girlsAppearance'
                    || trigger === 'chuckAppearance')
                    && <span>This feeling{mappedDots}</span>}
                <br/>
                    {trigger !== 'initial'
                    && (trigger === 'girlsAppearance' || trigger === 'chuckAppearance')
                    &&
                    <>
                        <span>When you want to find</span>
                        <br/>
                        <span>the <b>perfect</b> background</span>
                        <br/>
                        <span>for your design project</span>
                    </>}
             </span>
                {(trigger === 'girlsAppearance' || trigger === 'chuckAppearance' || trigger === 'greetingFade' ) &&
                <>
                    <img src={girl1} style={{gridArea: "girl1", ...leftGirlStyle()}} className={css.img} alt={'girl1'}/>
                    <img src={girl2} style={{gridArea: 'girl2', ...rightGirlStyle()}} className={css.img} alt={'girl2'}/>
                </>}
                {(trigger === 'chuckAppearance' || trigger === 'greetingFade' ) &&
                <>
                    <img src={dog} style={{gridArea: 'dog', width: '8vw', paddingLeft: '2vw', ...chuckStyle()}}
                         className={css.img} alt={'dog'}/>
                </>}
                {(trigger === 'greetingFade'
                    || trigger === 'secondSplash'
                    || trigger === 'secondSplashStand'
                    || trigger === 'secondSplashFade')
                    &&  <div style={secondSplashStyle()} className={css.splash}>
                            <span>Plunge into the world ov shiny shadows</span>
                            <br/>
                            <span>and macabre endless paints</span>
                        </div>}
                {(trigger === 'thirdSplash'
                    || trigger === 'thirdSplashStand'
                    || trigger === 'thirdSplashMove'
                    || trigger === 'thirdSplashSecondStand')
                    && <div style={{ ...thirdSplashStyle()}} className={css.splash}>
                            <span>Where the pure art</span>  <br/>
                            <span>and sophistication unbridled</span>  <br/>
                            <span>interlaced</span>
                        </div>}
                {(trigger === 'thirdSplashMove'
                    || trigger === 'thirdSplashSecondStand')
                    && <div  className={css.splash}>
                            <span>Warping by aetherial light</span>  <br/>
                            <span>ov the brightest voiceless stars</span>  <br/>
                            <span>and filling by the weird</span>  <br/>
                            <span>universe enigmatick void</span>
                        </div>}
                {trigger === 'thirdSplash' && false &&
                    <>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In pulvinar ac purus eu vehicula. Vestibulum molestie ullamcorper nisi non suscipit.
                        Aliquam et tellus vitae nisi tempus efficitur non nec nisi. Nunc eget tristique magna,
                        vitae aliquet erat. Suspendisse luctus enim vel lectus posuere fringilla. Sed tincidunt
                        arcu sed condimentum tempor. Phasellus fringilla sapien non erat posuere lacinia.
                        Curabitur arcu mauris, tempor eget nisi egestas, tristique placerat quam.
                        Nullam et odio et dolor porttitor auctor. Morbi egestas feugiat augue.
                        Praesent vel ex odio. Aenean hendrerit facilisis vestibulum. Ut faucibus tellus
                        sodales erat lobortis volutpat. Integer luctus convallis purus ac vulputate.

                        Donec ut lectus quam. Curabitur pharetra lobortis tincidunt.
                        Nunc lorem velit, laoreet lobortis turpis vitae, fringilla molestie odio.
                        Donec condimentum pretium scelerisque. In feugiat, ipsum at ullamcorper
                        fermentum, eros eros iaculis enim, posuere interdum felis orci in dolor.
                        Nulla placerat purus ac mattis bibendum. Donec ut urna at dui fringilla elementum.
                        Fusce arcu nulla, auctor sed orci ac, suscipit pulvinar justo. Pellentesque
                        vitae cursus felis. Integer malesuada sollicitudin massa, id efficitur
                        quam tristique quis. Vivamus imperdiet eros quis erat hendrerit, id pharetra
                        nisi sodales. Duis aliquam viverra ipsum, id auctor dui hendrerit a. Fusce eget
                        posuere urna.

                        Mauris viverra lacus in fermentum lobortis. Donec vel tempus sapien. Donec
                        pretium sapien sit amet tortor molestie suscipit. Aenean posuere cursus enim quis
                        rhoncus. Pellentesque aliquam, elit non molestie rhoncus, dolor dolor consequat mauris,
                        at tempus mauris risus in magna. Pellentesque quis viverra lorem. Mauris a ligula
                        a erat sagittis vehicula a vitae sapien. Curabitur fermentum nisi sit amet ex convallis,
                        eget viverra diam mattis.

                        Aliquam ultrices justo at quam porta, sed iaculis neque maximus. Duis efficitur
                        felis nec ante dictum sodales a sit amet mauris. Quisque ultricies erat nec urna
                        porta vulputate. Sed pretium, justo sit amet blandit venenatis, massa enim congue
                        libero, a viverra sapien turpis sed diam. Pellentesque condimentum lectus eu
                        feugiat tristique. In ullamcorper velit et lectus ullamcorper sodales.
                        Pellentesque lacinia eleifend diam ac fermentum. Aenean nec est quis lorem
                        porta ullamcorper ut nec nisl.
                    </div>
                </>}

            </div>
        </div>

    )
}


export default Content