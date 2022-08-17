import React,{useEffect,useState} from 'react';
import "./style.scss"

const SearchMain = () => {
    const Distance=[]
    const [domLeft,setDomLeft]=useState()
    useEffect(()=>{
        let items=document.querySelectorAll(".Toggle")
        let scroll=document.querySelector(".Toggle-scroll")
        setDomLeft(items[0].offsetLeft)
        for(let i=0;i<items.length;i++){
            Distance.push(items[i].offsetLeft)
            items[i].addEventListener("click",function (){
                scroll.style.left=Distance[i]+"px"
                console.log(scroll.style.left)
                for(let i=0;i<items.length;i++){
                    items[i].style.color="#d1d1d0"
                    items[i].id=""
                }
                items[i].style.color="#FFFFFF"
                items[i].id="active"
            })
        }
    },[])
    return (
        <div className="SearchMain">
           <div className="SearchMain-Toggle">
               <ul className="Toggle-Top">
                   <li className="Toggle-usually Toggle" style={{color:"#FFFFFF" }} >常用</li>
                   <li className="Toggle-search Toggle">搜索</li>
                   <li className="Toggle-toggle Toggle">工具</li>
                   <li className="Toggle-community Toggle">社区</li>
                   <li className="Toggle-life Toggle">生活</li>
                   <li className="Toggle-work Toggle">求职</li>
               </ul>
               <span className="Toggle-scroll" style={{left:domLeft}}>
            </span>
           </div>
            <form action="https://www.baidu.com/s?wd="  className="Toggle-From" method="get" target="_blank">
                <input type="text" className="Toggle-input" placeholder="百度一下" name="wd"/>
                <button type="submit" className="Input-Submit">
                    <span className="iconfont icon-sousuo Input-sousuo"></span>
                </button>
            </form>
        </div>
    );
};

export default SearchMain;