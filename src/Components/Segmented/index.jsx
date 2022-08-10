import React from "react";

import "./style.scss"

const TopNav = () =>{
    return(
        <div id="app">
	            <ul>
		        <li>热门网址</li>
		        <li>大家喜欢</li>
		        <li>最新网址</li>
		        <div class="focus-el el--1"></div>
		        <div class="focus-el el--2"></div>
	        </ul>
        </div>
    )
}