import React ,{useState}from 'react';
import "./style.scss"
import Logo from "../../assets/Logo.jpg"
import {useNavigate} from "react-router-dom"

const Layout = () => {
    const navigate=useNavigate()
    const [isShowInsp,setIsShowInsp]=useState(false)
    const [isShowMaterial,setIsShowMaterial]=useState(false)
    function GoInclusion(){
        navigate("/inclusion")
    }
    function handleShowInspiration(){
        let ele =document.querySelector(".Layout-Items-li-many")
        let Iele =document.querySelector(".inspiration-many-youjiantou")
        if(!isShowInsp){
            Iele.className="iconfont icon-shanglajiantou inspiration-many-youjiantou"
            ele.id="Layout-Items-li-many-hover"
            setIsShowInsp(isShowInsp=>!isShowInsp)
        }
        else{
            Iele.className="iconfont icon-youjiantou inspiration-many-youjiantou"
            ele.id=""
            setIsShowInsp(isShowInsp=>!isShowInsp)

        }
    }
    function handleShowMaterial(){
        let ele =document.querySelector(".ShowMaterial")
        let Iele =document.querySelector(".Material-many-youjiantou")
        if(!isShowMaterial){
            Iele.className="iconfont icon-shanglajiantou Material-many-youjiantou"
            ele.id="ShowMaterial-hover"
            setIsShowMaterial(isShowMaterial=>!isShowMaterial)
        }
        else{
            Iele.className="iconfont icon-youjiantou Material-many-youjiantou"
            ele.id=""
            setIsShowMaterial(isShowMaterial=>!isShowMaterial)

        }
    }
    return (
        <div className="Layout-Left">
            <div className="Layout-Logo">
                <img src={Logo} alt=""/>
            </div>
            <ul className="Layout-Items">
                <li >
                    <a href="/#SearchMain-Here"><i className="iconfont icon-sousuo" ></i>
                        <span>搜索</span>
                    </a>
                </li>
                <li >
                    <a href="/#SparateFreame"><i className="iconfont icon-html"></i>
                        <span>框架类库</span>
                    </a>
                </li>
                <li >
                    <a href="/#ProjectHosting"><i className="iconfont icon-github5"></i>
                        <span>项目托管</span>
                    </a>

                </li>
                <li >
                    <a href="/#Community"> <i className="iconfont icon-shequ"></i>
                        <span>开发社区</span>
                    </a>

                </li>
                <li >
                    <a href="/#CMS"><i className="iconfont icon-cms-c"></i>
                        <span>CMS程序</span>
                    </a>

                </li>
                <li >
                    <a href="/#FontIcon"><i className="iconfont icon-file-powerpoint"> </i>
                        <span>字体图标</span>
                    </a>

                </li>
                <li >
                    <a href="/#IDE"><i className="iconfont icon-HTML-fill"></i>
                        <span>IDE工具</span>
                    </a>

                </li>
                <li >
                    <a href="/#onlineClass"> <i className="iconfont icon-_kecheng"></i>
                        <span>在线课堂</span>
                    </a>

                </li>
                <li onClick={handleShowInspiration} >
                    <a href="/#InspirationGathering">
                        <i className="iconfont icon-lightbulb"></i>
                        <span>灵感采集</span>
                        <i className="iconfont icon-youjiantou inspiration-many-youjiantou"></i>
                    </a>

                </li>
                <li className="Layout-Items-li-many">
                    <ul className="inspiration-many">
                        <li><a href="javascript:;">发现产品</a></li>
                        <li><a href="javascript:;">界面灵感</a></li>
                        <li><a href="javascript:;">网页灵感</a></li>
                    </ul>
                </li>
                <li >
                    <a href="/#cloudServe"><i className="iconfont icon-cloud-full"></i>
                        <span>云服务</span>
                    </a>

                </li>
                <li onClick={handleShowMaterial} >
                    <a href="javascript:;">
                        <i className="iconfont icon-briefcase-full"></i>
                        <span>素材资源</span>
                        <i className="iconfont icon-youjiantou Material-many-youjiantou"/>
                    </a>
                </li>
                <li className="ShowMaterial" >
                    <ul className="ShowMaterial-ul">
                        <li><a href="javascript:;"> LOGO设计</a></li>
                        <li><a href="javascript:;"> Mockup</a></li>
                        <li><a href="javascript:;"> PPT资源</a></li>
                        <li><a href="javascript:;"> Sketch资源</a></li>
                        <li><a href="javascript:;">UI资源 </a></li>
                        <li><a href="javascript:;"> 图标素材</a></li>
                        <li><a href="javascript:;">字体资源 </a></li>
                        <li><a href="javascript:;"> 平面素材</a></li>
                        <li><a href="javascript:;"> 摄影图库</a></li>
                    </ul>
                </li>
                <li >
                    <a href="javascrpit:;">
                        <i className="iconfont icon-youqinglianjie"></i>
                        <span>友情链接</span>
                    </a>

                </li>
            </ul>
            <div className="Layout-Record" onClick={GoInclusion}>
                <a href="javascript:;">
                    <i className="iconfont icon-ceshishenqing"></i>
                    <span>申请收录</span>
                </a>

            </div>
        </div>
    );
};

export default Layout;