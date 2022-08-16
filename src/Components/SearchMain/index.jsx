import React,{useEffect} from 'react';
import "./style.scss"

const SearchMain = () => {
    useEffect(()=>{
        let items=document.querySelectorAll(".Toggle")
        let scroll=document.querySelector(".Toggle-scroll")
        for(let i=0;i<items.length;i++){
            items[i].addEventListener("click",function (){
                scroll.style.left=(680+i*114)/1920*100+"rem"
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
            <ul className="Toggle-Top">
                <li className="Toggle-usually Toggle" style={{color:"#FFFFFF"}}>常用</li>
                <li className="Toggle-search Toggle">搜索</li>
                <li className="Toggle-toggle Toggle">工具</li>
                <li className="Toggle-community Toggle">社区</li>
                <li className="Toggle-life Toggle">生活</li>
                <li className="Toggle-work Toggle">求职</li>
            </ul>
            <span className="Toggle-scroll">
            </span>

        </div>
    );
};

export default SearchMain;