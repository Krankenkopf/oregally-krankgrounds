import React, {FC, useEffect, useRef, useState} from 'react';
import css from "../../App.module.css";


type TBackgroundProps = {
    scrollDistance: number
    dynamicBg: boolean
    bgType: TBgType
}

export type TBgType = 'color' | 'b&w'


const Background: FC<TBackgroundProps> = ({scrollDistance, dynamicBg, bgType}) => {

    const dynamicStyle = () => {
        switch (true) {
            case (scrollDistance < 1200):
                return {left: `-${scrollDistance / 2}px`}
            case (scrollDistance >= 1200 && scrollDistance <= 1900):
                return {left: `-600px`, top: `-${(scrollDistance - 1200) / 2}px`}
            case (scrollDistance>1900):
                return {left: `${-(scrollDistance-1900) / 2-600}px`, top: `-${(scrollDistance - 1200) / 2}px`}
            default:
                return {}
        }
    }

    const commonStyle = () => {
        return {transition: 'filter 1500ms 1ms', webkitFilter: bgType === 'b&w' ? 'grayscale(100%)' : null, left: '0', top: `-${(scrollDistance) / 2}px`}
    }

    const bgClassName = dynamicBg ? css.dynBg : `${css.dynBg} + ${css.commonBg}`
    return  <div style={dynamicBg ? dynamicStyle() : commonStyle()} className={bgClassName}>
        <BgSnippets scrollDistance={scrollDistance} dynamicBg={dynamicBg} bgType={bgType}/>
    </div>
}

const BgSnippets: FC<TBackgroundProps> = ({scrollDistance, dynamicBg}) => {
    const generateColor = () => '#f' + Math.random().toString(16).substr(-4) + 'f';

    const generateSnippets = (amount: number) => {
        const snippets = [] as unknown as Array<{ hexCode: string }>
        for (let i = 0; i < amount; i++) {
            snippets.push({hexCode: generateColor()})
        }
        return snippets
    }
    const [update, setUpdate] = useState<boolean>(false)
    const [updateStatus, setUpdateStatus] = useState<boolean>(false)
    const [snippets, setSnippets] = useState<Array<{ hexCode: string }>>(() => {
            return generateSnippets(dynamicBg ? 625 : 200)
        })
    let timerId: React.MutableRefObject<NodeJS.Timeout | undefined> = useRef()
    if (scrollDistance>=1200 && scrollDistance<=1900 && !update && dynamicBg) setUpdate(true)
    if ((scrollDistance<1200 || scrollDistance>1900) && update) setUpdate(false)
    useEffect(() => {
        if (update && !updateStatus) {
            setUpdateStatus(true)
            timerId.current = setTimeout(function update() {
                const newSnippets = generateSnippets(625)
                setSnippets(newSnippets)
                timerId.current = setTimeout(update, 100)
            }, 500)
        }
        if (!update && updateStatus && timerId) {
            setUpdateStatus(false)
            timerId.current && clearTimeout(timerId.current)
        }
    }, [update, updateStatus])

    const mappedSnippets = snippets.map((s, index) => (<Snippet key={index} hexCode={s.hexCode}/>))

    return <>{mappedSnippets}</>
}

const Snippet = ({hexCode}: { hexCode: string }) => {
    const style = {
        display: 'inline-block',
        backgroundColor: hexCode,
        margin: '0'
    }
    return <div className={css.rectangle} style={style}> </div>
}

export default Background