import React, {useEffect, useRef, useState} from "react";
import Hedgehog from "./Hedgehog";

const HedgehogsDecoration = () => {
    const [hedgehogs, generateHedgehogs] = useState(() => {
        let arr: Array<{ a: number, b: number }> = []
        for (let i=0; i<50; i++) {
            arr.push({
                a: Math.ceil(Math.random()*1000),
                b: Math.ceil(Math.random()*1000)
            })
        }
        return arr
    })
    const [tick, inc] = useState<number>(0)
    useEffect(() => {
        let timerId = setTimeout(() => {
            console.log(tick)
            inc(tick+1)
        }, 200)
        return () => clearTimeout(timerId)
    }, [tick])
    const hedgehogsBlock = useRef<HTMLDivElement>(null)
    const distance = hedgehogsBlock.current?.offsetWidth
    const mappedHedgehogs = hedgehogs.map((h, i) => (
        <Hedgehog key={`${h.a}${h.b}${i}`}
                  tick={tick} speed={h.a/25>8 ? h.a/25 : h.a/25+8}
                  jump={h.b/50}
                  distance={distance ? distance : 1100} />
        ))
    return <div style={{padding: '1vw', width: '100%'}} ref={hedgehogsBlock} >
        {hedgehogsBlock.current?.offsetWidth ? mappedHedgehogs : null}
    </div>
}


export default HedgehogsDecoration