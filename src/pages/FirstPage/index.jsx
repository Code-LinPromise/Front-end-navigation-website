import React ,{useState}from 'react';
import "./style.scss"
import Layout from "../../Components/Layout/index.jsx";
import TopNav from "../../Components/TopNav/index.jsx";
import SearchMain from "../../Components/SearchMain/index.jsx";
import Segmented from "../../Components/Segmented/index.jsx";
import SearchPage from "../SearchPage/index.jsx";
import LinkItem from "../../Components/LinkItem/index.jsx";
import {hotWebSide,Frame,ProjectHosting,Community,CMS,FontIcon,IDE,onlineClass} from "../../assets/ArrayItem.js";
const FirstPage = () => {
    const [isShowSearchPage,setIsShowSearchPage]=useState(false)
    function ShowSearchPage(){
        setIsShowSearchPage(isShowSearchPage=>!isShowSearchPage)
    }
    return (
        <div className="FirstPage">
            {
                isShowSearchPage?<SearchPage ShowSearchPage={ShowSearchPage}/>:<div></div>
            }
            <Layout/>
            <TopNav ShowSearchPage={ShowSearchPage}/>
            <div id="SearchMain-Here">
                <SearchMain/>
            </div>
            <div className="First-Segmented">
                <Segmented obj={['热门网址', '大家喜欢', '最新网址']}/>
            </div>
            <div className="LinkItemHot">
                <ul>
                    {
                        hotWebSide.map((item,index)=>{
                            return <li id={index===hotWebSide.length-1?"SparateFreame":""}>
                                <LinkItem itemName={item.name} itemContent={item.details} itemIcon={item.imageUrl} itemUrl={item.url}/>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="SparateFreame">
                <span className="iconfont icon-biaoqian "></span>
                <span>框架类库</span>
            </div>
            <div className="LinkItem-Frame">
                <ul>
                    {
                        Frame.map((item,index)=>{
                            return <li id={index===Frame.length-1?"ProjectHosting":""}>
                                <LinkItem itemName={item.name} itemContent={item.details} itemIcon={item.imageUrl} itemUrl={item.url}/>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="ProjectHosting">
                <span className="iconfont icon-biaoqian "></span>
                <span>项目托管</span>
            </div>
            <div className="LinkItem-ProjectHosting">
                <ul>
                    {
                        ProjectHosting.map((item,index)=>{
                            return <li id={index===ProjectHosting.length-1?"Community":""}>
                                <LinkItem itemName={item.name} itemContent={item.details} itemIcon={item.imageUrl} itemUrl={item.url}/>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="Community">
                <span className="iconfont icon-biaoqian "></span>
                <span>开发社区</span>
            </div>
            <div className="LinkItem-Community">
                <ul>
                    {
                        Community.map((item,index)=>{
                            return <li id={index===Community.length-1?"CMS":""}>
                                <LinkItem itemName={item.name} itemContent={item.details} itemIcon={item.imageUrl} itemUrl={item.url}/>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="CMS">
                <span className="iconfont icon-biaoqian "></span>
                <span>CMS程序</span>
            </div>
            <div className="LinkItem-CMS">
                <ul>
                    {
                        CMS.map((item,index)=>{
                            return <li id={index===CMS.length-1?"FontIcon":""}>
                                <LinkItem itemName={item.name} itemContent={item.details} itemIcon={item.imageUrl} itemUrl={item.url}/>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="FontIcon">
                <span className="iconfont icon-biaoqian "></span>
                <span>字体图标</span>
            </div>
            <div className="LinkItem-FontIcon">
                <ul>
                    {
                        FontIcon.map((item,index)=>{
                            return <li id={index===FontIcon.length-1?"IDE":""}>
                                <LinkItem itemName={item.name} itemContent={item.details} itemIcon={item.imageUrl} itemUrl={item.url}/>
                            </li>
                        })
                    }
                </ul>
            </div>

            <div className="IDE">
                <span className="iconfont icon-biaoqian "></span>
                <span>IDE工具</span>
            </div>
            <div className="LinkItem-IDE">
                <ul>
                    {
                        IDE.map((item,index)=>{
                            return <li id={index===IDE.length-1?"onlineClass":""}>
                                <LinkItem itemName={item.name} itemContent={item.details} itemIcon={item.imageUrl} itemUrl={item.url}/>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="onlineClass">
                <span className="iconfont icon-biaoqian "></span>
                <span>在线课堂</span>
            </div>
            <div className="LinkItem-onlineClass">
                <ul>
                    {
                        onlineClass.map((item,index)=>{
                            return <li >
                                <LinkItem itemName={item.name} itemContent={item.details} itemIcon={item.imageUrl} itemUrl={item.url}/>
                            </li>
                        })
                    }
                </ul>
            </div>


        </div>
    );
};

export default FirstPage;