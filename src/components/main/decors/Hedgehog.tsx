import hedgehog from "../../../assets/png/hedgehog.png"
import React, {FC, useState} from "react";
import css from "./Hedgehog.module.css"

export type THedgehogProps = {
    tick: number
    speed: number  //8...40
    jump: number
    distance: number
}

const Hedgehog: FC<THedgehogProps> = (props) => {
    const {tick, speed, jump, distance} = props
    const [ownTick, setOwnTick] = useState(0)
    const [startPos, setStartPos] = useState(Math.ceil(Math.random()*10))
    const returning = () => {
        if (speed*(tick-ownTick)>distance/10*9) return setOwnTick(tick)
        else return 0
    }
    returning()
    const style = () => {
        const opacity = () => {
         /*   return '1'*/
            if (speed * (tick-ownTick) < distance / 20 )
                return `${speed * (tick-ownTick)/distance*5}`
            else if (speed * (tick-ownTick) > distance / 20 * 9)
                return `${(distance - speed * (tick-ownTick))/distance*5}`
            else return '1'
        }
        const jumping = () => {
            const pos = tick+startPos
            if (pos % 2 === 0 && pos % 4 === 0) return `${jump*2+100}px`
            else if (pos % 2 === 0) return `${-jump*2+100}px`
            else return '100px'
        }
        const transition = () => tick===ownTick ? 'all 0ms 0ms' : "all 300ms 5ms"
        return {
            Position: 'absolute',
            left: `${speed*(tick-ownTick)}px`,
            top: jumping(),
            opacity: opacity(),
            transition: transition(),
        }
    }
    return <div>
        <img src={hedgehog}
             style={style()}
             className={Math.random()>0.5 ? css.hedgehog : css.anotherHedgehog} alt={'hedgehog'} />
    </div>
}

export default Hedgehog