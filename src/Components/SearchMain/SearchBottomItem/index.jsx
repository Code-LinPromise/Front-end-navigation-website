import React,{useEffect} from 'react';
import "./style.scss"
import { nanoid } from 'nanoid'

const SearchBottomItem = (props) => {
    useEffect(()=>{
        let items=document.querySelectorAll(".Toggle-bottom-item")
        for (let i=0;i<items.length;i++){
            for (let i=0;i<items.length;i++){
                items[i].className="Toggle-bottom-item"
            }
            items[0].className="Toggle-bottom-item-active Toggle-bottom-item"
            items[i].addEventListener("click",function (){
                GetToggleBottomNum(i)
                for (let i=0;i<items.length;i++){
                    items[i].className="Toggle-bottom-item"
                }
                items[i].className="Toggle-bottom-item-active Toggle-bottom-item"
            })
        }
    })
    const {items,GetToggleBottomNum}=props
    return (
        <ul className="SearchBottomItem">
            {
                items.map((item,index)=>{

                    return <li className="Toggle-bottom-item" >{item}</li>
                })
            }
        </ul>
    );
};

export default SearchBottomItem;