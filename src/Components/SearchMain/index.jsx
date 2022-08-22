import React,{useEffect,useState} from 'react';
import "./style.scss"
import SearchBottomItem from "./SearchBottomItem/index.jsx";

const SearchMain = () => {
    const [inputDetails,setInputDetails]=useState("")
    const Distance=[]
    const [whoseArray,setWhoseArray]=useState(0)
    const [domLeft,setDomLeft]=useState()
    const [placeHolderNum,setPlaceHolderNum]=useState("0")
    const CommonlyUsed=["百度","Google","淘宝","Bing"]
    const Search=["百度","Google","360","搜狗","Bing","神马"]
    const Toggle=["权重查询","友链检测","备案查询","PING检测","死链检测","关键词挖掘"]
    const Community=["知乎","微信","微博","豆瓣","搜外问答"]
    const Life =["淘宝","京东","12306","去哪儿旅行"]
    const Work=["智联招聘","前程无忧","拉勾网","BOSS直聘"]
    const placeHolderCommonlyUsed=[
        {placeholder:"百度一下",url:"https://www.baidu.com/s?wd=",name:"wd"},
        {placeholder:"Google",url:"https://www.google.com//search?q=",name:"q"},
        {placeholder:"淘宝",url:"https://s.taobao.com/search?q=",name:"q"},
        {placeholder:"微软Bing搜索",url:"https://cn.bing.com/search?q=",name:"q"}
    ]
    const placeHolderSearch=[
        {placeholder:"百度一下",url:"https://www.baidu.com/s?wd=",name:"wd"},
        {placeholder:"Google",url:"https://www.google.com//search?q=",name:"q"},
        {placeholder:"360搜索",url:"https://www.so.com/s?q=",name:"q"},
        {placeholder:"搜狗搜索",url:"https://www.sogou.com/web?query=",name:"query"},
        {placeholder:"微软Bing搜索",url:"https://cn.bing.com/search?q=",name:"q"},
        {placeholder:"UC移动端搜索",url:"https://yz.m.sm.cn/s?q=",name:"q"},
    ]
    const placeHolderToggle=[
        {placeholder:"请输入网址(不带http://)",url:`http://rank.chinaz.com/all/${inputDetails}`,name:""},
        {placeholder:"请输入网址(不带http://)",url:`https://link.chinaz.com/${inputDetails}`,name:""},
        {placeholder:"请输入网址(不带http://)",url:`https://icp.aizhan.com/${inputDetails}`,name:""},
        {placeholder:"请输入网址(不带http://)",url:`http://ping.chinaz.com/${inputDetails}`,name:""},
        {placeholder:"请输入网址(不带http://)",url:"http://tool.chinaz.com/Links/?DAddress=",name:"DAddress"},
        {placeholder:"请输入关键词",url:"http://www.ciku5.com/s?wd=",name:"wd"},
    ]
    const placeHolderCommunity=[
        {placeholder:"知乎",url:"https://www.zhihu.com/search?type=content&q=",name:"q"},
        {placeholder:"微信",url:"http://weixin.sogou.com/weixin?type=2&query=",name:"query"},
        {placeholder:"微博",url:"https://s.weibo.com/weibo?q=",name:"q"},
        {placeholder:"豆瓣",url:"https://www.douban.com/search?q=",name:"q"},
        {placeholder:"搜外问答",url:"https://ask.seowhy.com/search/?q=",name:"q"},
    ]
    const placeHolderLife=[
        {placeholder:"淘宝",url:"https://s.taobao.com/search?q=",name:"q"},
        {placeholder:"京东",url:"https://search.jd.com/Search?keyword=",name:"keyword"},
        {placeholder:"12306",url:`https://www.12306.cn/${inputDetails}`,name:""},
        {placeholder:"去哪儿旅行",url:`https://www.qunar.com/${inputDetails}`,name:""},
    ]
    const placeHolderWork=[
        {placeholder:"智联招聘",url:"https://sou.zhaopin.com/jobs/searchresult.ashx?kw=",name:"kw"},
        {placeholder:"前程无忧",url:`https://search.51job.com/?${inputDetails}`,name:""},
        {placeholder:"拉钩网",url:`https://www.lagou.com/jobs/list_${inputDetails}`,name:""},
        {placeholder:"Boss直聘",url:"https://www.zhipin.com/web/geek/job?query=",name:"query"},
    ]
    const placeHolderName=[placeHolderCommonlyUsed,placeHolderSearch,placeHolderToggle,placeHolderCommunity,
        placeHolderLife,placeHolderWork
    ]
    const  SumArray=[CommonlyUsed,Search,Toggle,Community,Life,Work]
    useEffect(()=>{
        let items=document.querySelectorAll(".Toggle")
        let scroll=document.querySelector(".Toggle-scroll")
        setDomLeft(items[0].offsetLeft)
        for(let i=0;i<items.length;i++){
            Distance.push(items[i].offsetLeft)
            items[i].addEventListener("click",function (){
                scroll.style.left=Distance[i]+"px"
                setWhoseArray(i)
                for(let i=0;i<items.length;i++){
                    items[i].id=""
                }
                items[i].id="active"
            })
        }
    },[])
    function GetToggleBottomNum(number){
        setPlaceHolderNum(number)
    }
    function IsNull(e){
        let input =document.querySelector(".Toggle-input")
        if(input.value===""){
            e.preventDefault()
        }
    }
    function RecordDetails(e){+
        console.log(e.target.value)
        setInputDetails(e.target.value)
    }
    return (
        <div className="SearchMain">
           <div className="SearchMain-Toggle">
               <ul className="Toggle-Top">
                   <li className="Toggle-usually Toggle" id="active" >常用</li>
                   <li className="Toggle-search Toggle">搜索</li>
                   <li className="Toggle-toggle Toggle">工具</li>
                   <li className="Toggle-community Toggle">社区</li>
                   <li className="Toggle-life Toggle">生活</li>
                   <li className="Toggle-work Toggle">求职</li>
               </ul>
               <span className="Toggle-scroll" style={{left:domLeft}}>
            </span>
           </div>
            <form action={placeHolderName[whoseArray][placeHolderNum].url}  className="Toggle-From" method="get" target="_blank">
                <input type="text" className="Toggle-input" placeholder={placeHolderName[whoseArray][placeHolderNum].placeholder} name={placeHolderName[whoseArray][placeHolderNum].name} autoComplete="off"
                    onChange={RecordDetails}
                />
                <button type="submit" className="Input-Submit" onClick={IsNull}>
                    <span className="iconfont icon-sousuo Input-sousuo"></span>
                </button>
            </form>
            <div className="Toggle-Bottom">
                <SearchBottomItem items={SumArray[whoseArray]} GetToggleBottomNum={GetToggleBottomNum}/>
            </div>
        </div>
    );
};

export default SearchMain;