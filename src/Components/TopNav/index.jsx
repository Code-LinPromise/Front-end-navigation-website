import React,{useEffect,useState} from 'react';
import "./style.scss"
import axios from "../../utils/request.js"

const TopNav = () => {
    const [cityName,setCityName]=useState("")
    const [weather,setWeather]=useState("")
    const [locationCode,setLocationCode]=useState()
    const [temperature,setTemperature]=useState()
    const [randomFont,setRandomFont]=useState("")
    const FontArray=[
        "人不光是靠他生来就拥有一切，而是靠他从学习中所得到的一切来造就自己。",
        "生命在闪耀中现出绚烂，在平凡中现出真实。",
        "阳光和鲜花在达观的微笑里，凄凉与痛苦在悲观的叹息中。",
        "生活就是面对真实的微笑，就是越过障碍注视将来。",
        "从容地去度那生活，一直到饮尽了杯中最后一滴。",
        "天行健 君子以自强不惜 地势坤 君子以厚德载物",
        "对昨天的悔恨最终只是囚禁了今天和明天。"
    ]
    function randomNum(minNum,maxNum){
        switch(arguments.length){
            case 1:
                return parseInt(Math.random()*minNum+1,10);
                break;
            case 2:
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
                break;
            default:
                return 0;
                break;
        }
    }
    useEffect(()=>{
        setRandomFont(FontArray[randomNum(0,FontArray.length-1)])
    },[])
    useEffect(()=>{
        fetch("http://restapi.amap.com/v3/ip?key=ecd5d16775bf07f839595840bd630cd0").then((res)=>{
            if(res.ok){
                res.text().then((data)=>{
                    const detail=JSON.parse(data)
                    setCityName(detail.city)
                    setLocationCode(detail.adcode)
                })
            }
        }).catch((res)=>{
            console.log(res.status);
        });
        if(locationCode){
            axios.get("https://restapi.amap.com/v3/weather/weatherInfo?parameters"
                , {
                    params: {
                        city:locationCode,
                        key:"ecd5d16775bf07f839595840bd630cd0",
                    }
                }
            ).then(
                function (res){
                    if(res.status===200){
                        console.log(res.data)
                        setWeather(res.data.lives[0].weather)
                        setTemperature(res.data.lives[0].temperature)
                    }
                }
            )
        }
    },[locationCode])
    return (
        <div className="TopNav">
            <div className="CityAndWeather" >
                <span>
                {cityName}
            </span>
                <span>
                {weather}
            </span>
                <span>
                {temperature}℃
            </span>
            </div>

            <div className="FontAndSearch">
                <strong>{randomFont}</strong>
                <span className="iconfont icon-sousuo TopNav-sousuo"></span>
            </div>

            
        </div>
    );
};

export default TopNav;