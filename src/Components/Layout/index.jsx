import React ,{useState}from 'react';
import "./style.scss"

const Layout = () => {
    const [isShowInsp,setIsShowInsp]=useState(false)
    function handleShowInspiration(e){
        let ele =document.querySelector(".Layout-Items-li-many")
        if(!isShowInsp){
            e.target.lastChild.className="iconfont icon-shanglajiantou inspiration-many-youjiantou"
            ele.style.display="block"
            setIsShowInsp(isShowInsp=>!isShowInsp)
        }
        else{
            e.target.lastChild.className="iconfont icon-youjiantou inspiration-many-youjiantou"
            ele.style.display="none"
            setIsShowInsp(isShowInsp=>!isShowInsp)
        }
    }
    return (
        <div className="Layout-Left">
            <div className="Layout-Logo">
                <h1>前端导航网站</h1>
            </div>
            <ul className="Layout-Items">
                <li >
                    <i className="iconfont icon-sousuo"></i> <span>搜索</span>
                </li>
                <li >
                    <i className="iconfont icon-html"></i> <span>框架类库</span>
                </li>
                <li >
                    <i className="iconfont icon-github5"></i> <span>项目托管</span>
                </li>
                <li >
                    <i className="iconfont icon-shequ"></i> <span>开发社区</span>
                </li>
                <li >
                    <i className="iconfont icon-cms-c"></i> <span>CMS程序</span>
                </li>
                <li >
                    <i className="iconfont icon-file-powerpoint"> </i> <span>字体图标</span>
                </li>
                <li >
                    <i className="iconfont icon-HTML-fill"></i> <span>IDE工具</span>
                </li>
                <li >
                    <i className="iconfont icon-_kecheng"></i> <span>在线课堂</span>
                </li>
                <li onClick={handleShowInspiration}>
                    <i className="iconfont icon-lightbulb"></i> <span>灵感采集</span> <i className="iconfont icon-youjiantou inspiration-many-youjiantou"></i>
                </li>
                <li className="Layout-Items-li-many">
                    <ul className="inspiration-many">
                        <li>发现产品</li>
                        <li>界面灵感</li>
                        <li>网页灵感</li>
                    </ul>
                </li>
                <li >
                    <i className="iconfont icon-cloud-full"></i> <span>云服务</span>
                </li>
                <li >
                    <i className="iconfont icon-briefcase-full"></i>
                    <span>素材资源</span>
                </li>
                <li >
                    <i className="iconfont icon-youqinglianjie"></i> <span>友情链接</span>
                </li>
            </ul>
            <div className="Layout-Record">
                <i className="iconfont icon-ceshishenqing"></i> <span>申请收录</span>
            </div>
        </div>
    );
};

export default Layout;