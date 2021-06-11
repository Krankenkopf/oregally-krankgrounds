import React, {FC} from "react";
import cruelFog from "../../../assets/png/picture_1.png";
import nyar from "../../../assets/nyar.png";
import {TTrigger} from "../ContentContainer";

type TFogProps = {
    scrollDistance: number
    trigger: TTrigger
}

const Fog: FC<TFogProps> = ({scrollDistance, trigger}) => {
    const fogStyle = () => {
        switch (trigger) {
            case 'thirdSplash': return {
                opacity: 0,
            }
            case 'thirdSplashStand': return {
                opacity: `${(scrollDistance * 4 - 8400) / 10000}`,
                transform: `translate3d(${(scrollDistance * 4 - 8400) / 50 - 500}px,
                ${(scrollDistance * 4 - 8400) / 10 - 150}px, 0) scale(${2})`,
            }
            case 'thirdSplashMove':
            case "thirdSplashSecondStand":
                return {
                    opacity: `${(scrollDistance - 2350) / 10000 + 0.1}`,
                    transform: `translate3d(${(scrollDistance * 4 - 9400) / 50 - 480}px,
                ${-(scrollDistance * 4 - 9400) / 50 - 50}px, 0) scale(${2})`,
                }
            default: return {}
        }
    }
    const anotherFogStyle = () => {
        switch (trigger) {
            case 'thirdSplash': return {
                opacity: 0,
            }
            case 'thirdSplashStand': return {
                opacity: `${(scrollDistance * 4 - 8400) / 10000}`,
                transform: `translate3d(${-(scrollDistance * 4 - 8400) / 10 + 1000}px, 
                ${(scrollDistance * 4 - 8400) / 4 - 550}px, 0) scale(${3})`,
            }
            case 'thirdSplashMove':
            case "thirdSplashSecondStand":
                return {
                    opacity: `${(scrollDistance - 2350) / 10000 + 0.1}`,
                    transform: `translate3d(${-(scrollDistance * 4 - 9400) / 10 + 900}px, 
                ${(scrollDistance * 4 - 9400) / 100 - 300}px, 0) scale(${3})`,
                }
            default: return {}
        }
    }
    const oneAnotherFogStyle = () => {
        switch (trigger) {
            case 'thirdSplash': return {
                opacity: 0,
            }
            case 'thirdSplashStand': return {
                opacity: `${(scrollDistance * 4 - 8400) / 10000}`,
                transform: `translate3d(${-(scrollDistance * 4 - 8400) / 5 + 500}px, 
                ${(scrollDistance * 4 - 8400) / 10+200}px, 0) scale(${3})`,
            }
            case 'thirdSplashMove':
            case "thirdSplashSecondStand":
                return {
                    opacity: `${(scrollDistance - 2350) / 10000 + 0.1}`,
                    transform: `translate3d(${-(scrollDistance * 4 - 9400) / 5 + 250}px, 
                ${(scrollDistance * 4 - 9400) / 100 + 300}px, 0) scale(${3})`,
                }
            default: return {}
        }
    }
    const nyarFogStyle = () => {
        switch (trigger) {
            case 'thirdSplash': return {
                opacity: 0,
            }
            case 'thirdSplashStand': return {
                opacity: `${0}`,
                transform: `translate3d(${-(scrollDistance * 4 - 8400) / 20 - 700}px, 
                ${(scrollDistance * 4 - 8400) / 10-100}px, 0) scale(${3})`,
            }
            case 'thirdSplashMove':
            case "thirdSplashSecondStand":
                return {
                    opacity: `${(scrollDistance - 2350) / 2000}`,
                    transform: `translate3d(${-(scrollDistance * 4 - 9400) / 20 - 750}px, 
                ${(scrollDistance * 4 - 9400) / 100}px, 0) scale(${3})`,
                }
            default: return {}

        }
    }
    return <>
        {(trigger === 'thirdSplash'
            || trigger === 'thirdSplashStand'
            || trigger === 'thirdSplashMove'
            || trigger === 'thirdSplashSecondStand')
        && <div style={{
            width: 'inherit',
            height: '100vh',
            left: '0',
            marginTop: '-1vw',
            marginBottom: '-2vw',
            borderRadius: '1vw',
            position: 'absolute',
            overflow: 'hidden',
            gridArea: "text"}}>
            <img src={cruelFog} style={{width: '100%', position: 'absolute', transition: "all 100ms 5ms", objectFit: 'none', ...fogStyle()}} alt={'fog'}/>
            <img src={cruelFog} style={{width: '100%', transition: "all 100ms 5ms", objectFit: 'none', ...anotherFogStyle()}} alt={'fog'}/>
            <img src={cruelFog} style={{width: '100%', position: 'absolute', transition: "all 100ms 5ms", objectFit: 'none', ...oneAnotherFogStyle()}} alt={'fog'}/>
            <img src={nyar} style={{width: '100%', position: 'absolute', transition: "all 100ms 5ms", objectFit: 'none', ...nyarFogStyle()}} alt={'beast'}/>
        </div>}
        </>
}

export default Fog