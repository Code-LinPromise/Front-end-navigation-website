import {useEffect, useRef, useState} from 'react';

import './style.scss'

const onMouseOver = (setCurrentIndex) => {
    return (e) => {
        const index = e.target.getAttribute('index')
        if (index !== undefined && index !== null) {
            setCurrentIndex(index)
        }
    }
}
const onMouseLeave = (setCurrentIndex, clickIndex) => {
    return () => {
        setCurrentIndex(clickIndex)
    }
}
const onClick = (setClickIndex) => {
    return (e) => {
        const index = e.target.getAttribute('index')
        if (index !== undefined && index !== null) {
            setClickIndex(index)
        }
    }
}
const Segmented = (props) => {
    const {obj,IsNumber}=props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [refresh, setRefresh] = useState(false)
    const [clickIndex, setClickIndex] = useState(0)
    const el = useRef(null)
    const interval = useRef(null)
    const left = useRef(0)

    function handleShift(e) {
        console.log(e.target.index)
        IsNumber(e.target.index)
    }
    useEffect(() => {
        let end = currentIndex * 33;
        if (interval.current) {
            clearInterval(interval.current)
            interval.current = null
        }
        const eachStep = Math.abs(currentIndex - clickIndex) <= 0 ? 3 : Math.abs(currentIndex - clickIndex) * 2
        interval.current = setInterval(() => {
            if (left.current < end) {
                if (left.current + eachStep > end) {
                    left.current = end
                } else {
                    left.current += eachStep
                }
            } else if (left.current > end) {
                if (left.current - eachStep < end) {
                    left.current = end
                } else {
                    left.current -= eachStep
                }
            } else {
                clearInterval(interval.current)
                interval.current = null
            }
            setRefresh((prev) => !prev)
        }, 12)
    }, [currentIndex, clickIndex])
    return (
        <div className={'segment'}>
            <ul onMouseOver={onMouseOver(setCurrentIndex)} onMouseLeave={onMouseLeave(setCurrentIndex, clickIndex)}
                onClick={onClick(setClickIndex)}>
                {obj.map((item, index) => {
                    return (
                        <li key={index} index={index} onClick={handleShift}
                            style={index == currentIndex ? {color: 'white'} : {color: 'rgb(136,136,136)'}}>{item}</li>
                    )
                })}
                <div className="active" ref={el} style={{left: `${left.current}%`}}></div>
            </ul>
        </div>
    )
}
export default Segmented;