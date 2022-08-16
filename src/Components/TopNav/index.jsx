import React,{useEffect,useState} from 'react';
import "./style.scss"
import {randomNum} from "../../utils/RandomFunction.js"

const TopNav = () => {
    const [randomFont,setRandomFont]=useState("")
    const FontArray=[
        "人不光是靠他生来就拥有一切，而是靠他从学习中所得到的一切来造就自己。",
        "生命在闪耀中现出绚烂，在平凡中现出真实。",
        "阳光和鲜花在达观的微笑里，凄凉与痛苦在悲观的叹息中。",
        "生活就是面对真实的微笑，就是越过障碍注视将来。",
        "从容地去度那生活，一直到饮尽了杯中最后一滴。",
        "天行健 君子以自强不惜 地势坤 君子以厚德载物",
        "对昨天的悔恨最终只是囚禁了今天和明天。",
        "有的时候我真觉得全世界都像海上撞沉了船，最要紧的还是救出自己。"
    ]

    useEffect(()=>{
        setRandomFont(FontArray[randomNum(0,FontArray.length-1)])
    },[])

    useEffect(()=>{
        window.WIDGET={
            "CONFIG": {
                "modules": "01234",
                "background": "5",
                "tmpColor": "888888",
                "tmpSize": "16",
                "cityColor": "888888",
                "citySize": "16",
                "aqiColor": "FF9900",
                "aqiSize": "16",
                "weatherIconSize": "24",
                "alertIconSize": "18",
                "padding": "10px 10px 10px 10px",
                "shadow": "0",
                "language": "auto",
                "fixed": "false",
                "vertical": "top",
                "horizontal": "left",
                "key": "888b69b5741c42e8a53c6e002682147c"
            }
        }
        const script = document.createElement('script')
        script.setAttribute('src', "https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0")
        document.body.append(script)
    },[])
    return (
        <div className="TopNavAll">
            <div className="TopNav">
                <div className="CityAndWeather">
                    <div id="he-plugin-simple"  ></div>
                    <a className="iconfont icon-github Weather-GitHub" href="https://github.com/Code-LinPromise/Front-end-navigation-website" target="_blank"></a>
                </div>
                <div className="FontAndSearch">
                    <strong>{randomFont}</strong>
                    <span className="iconfont icon-sousuo TopNav-sousuo"></span>
                </div>
            </div>

        </div>
    );
};

export default TopNav;