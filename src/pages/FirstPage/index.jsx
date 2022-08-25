import React ,{useState}from 'react';
import "./style.scss"
import Layout from "../../Components/Layout/index.jsx";
import TopNav from "../../Components/TopNav/index.jsx";
import LinkItem from "../../Components/LinkItem/index.jsx";
import SearchMain from "../../Components/SearchMain/index.jsx";
import Segmented from "../../Components/Segmented/index.jsx";
import SearchPage from "../SearchPage/index.jsx";
const FirstPage = () => {
    const [isShowSearchPage,setIsShowSearchPage]=useState(false)
    function ShowSearchPage(){
        setIsShowSearchPage(isShowSearchPage=>!isShowSearchPage)
    }
    return (
        <div className="FirstPage">
            <Layout/>
            <TopNav ShowSearchPage={ShowSearchPage}/>
            <SearchMain/>
            <div className="First-Segmented">
                <Segmented obj={['热门网址', '大家喜欢', '最新网址']}/>
            </div>
            {
                isShowSearchPage?<SearchPage ShowSearchPage={ShowSearchPage}/>:<div></div>
            }
            <LinkItem itemName={"Github"} itemContent={"123456"} />

        </div>
    );
};

export default FirstPage;