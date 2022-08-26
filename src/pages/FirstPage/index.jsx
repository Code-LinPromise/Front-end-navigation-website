import React ,{useState}from 'react';
import "./style.scss"
import Layout from "../../Components/Layout/index.jsx";
import TopNav from "../../Components/TopNav/index.jsx";
import SearchMain from "../../Components/SearchMain/index.jsx";
import Segmented from "../../Components/Segmented/index.jsx";
import SearchPage from "../SearchPage/index.jsx";
import LinkItem from "../../Components/LinkItem/index.jsx";
import {HotUrl,Frame,ProjectHosting,Community,CMS,FontIcon,IDE,onlineClass,likes,feelCollect,cloudServe} from "../../assets/ArrayItem.js";
const FirstPage = () => {
    const [isNumber,setIsNumber]=useState(0)
    const [isShowSearchPage,setIsShowSearchPage]=useState(false)
    function ShowSearchPage(){
        setIsShowSearchPage(isShowSearchPage=>!isShowSearchPage)
    }
    function IsNumber(e){
        setIsNumber(e)
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
                <Segmented obj={['热门网址', '大家喜欢', '最新网址']} IsNumber={IsNumber}/>
            </div>
            {
                isNumber===0?<div className="LinkItemHot">
                    <ul>
                        {
                            HotUrl.map((item,index)=>{
                                return <li id={index===HotUrl.length-1?"SparateFreame":""}>
                                    <LinkItem itemName={item.name} itemContent={item.details} itemIcon={item.imageUrl} itemUrl={item.url}/>
                                </li>
                            })
                        }
                    </ul>
                </div>: <div className="LinkItemHot">
                    <ul>
                        {
                            likes.map((item,index)=>{
                                return <li id={index===likes.length-1?"SparateFreame":""}>
                                    <LinkItem itemName={item.name} itemContent={item.details} itemIcon={item.imageUrl} itemUrl={item.url}/>
                                </li>
                            })
                        }
                    </ul>
                </div>

            }
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
                            return <li id={index===onlineClass.length-1?"InspirationGathering":""}>
                                <LinkItem itemName={item.name} itemContent={item.details} itemIcon={item.imageUrl} itemUrl={item.url}/>
                            </li>
                        })
                    }
                </ul>
            </div>

            <div className="InspirationGathering">
                <span className="iconfont icon-biaoqian "></span>
                <span>灵感采集</span>
            </div>
            <div className="InspirationGathering-Choose">
                <Segmented obj={["发现产品","灵感界面","网页灵感"]} />
            </div>
            <div className="LinkItem-feelCollect">
                <ul>
                    {
                        feelCollect.map((item,index)=>{
                            return <li id={index===feelCollect.length-1?"cloudServe":""}>
                                <LinkItem itemName={item.name} itemContent={item.details} itemIcon={item.imageUrl} itemUrl={item.url}/>
                            </li>
                        })
                    }
                </ul>
            </div>

            <div className="cloudServe">
                <span className="iconfont icon-biaoqian "></span>
                <span>云服务</span>
            </div>
            <div className="LinkItem-cloudServe">
                <ul>
                    {
                        cloudServe.map((item,index)=>{
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