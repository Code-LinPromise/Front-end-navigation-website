import React,{useState,useEffect} from 'react';
import "./style.scss"

const SearchPage = (props) => {
    const [whereNumber,setWhereNumber]=useState(0)
    const {ShowSearchPage}=props
    const [inputDetails,setInputDetails]=useState("")
    const CommonlyUsed=["百度","Google","淘宝","Bing"]
    const Search=["百度","Google","360","搜狗","Bing","神马"]
    const Toggle=["权重查询","友链检测","备案查询","PING检测","死链检测","关键词挖掘"]
    const Community=["知乎","微信","微博","豆瓣","搜外问答"]
    const Life =["淘宝","京东","12306","去哪儿旅行"]
    const Work=["智联招聘","前程无忧","拉勾网","BOSS直聘"]
    const  SumArray=[CommonlyUsed,Search,Toggle,Community,Life,Work]
    const [placeHolderNum,setPlaceHolderNum]=useState("0")
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

    function GetValueNumber(){
        let select =document.querySelector("#Selected")
        setWhereNumber(select.value)
        setPlaceHolderNum(0)
    }
    function IsNull(e){
        let input =document.querySelector(".SearchPage-Input")
        if(input.value===""){
            e.preventDefault()
        }
    }

    useEffect(()=>{
        let items= document.querySelectorAll(".SearchPage-Toggle-Item")
        for(let i=0;i<items.length;i++){
            items[i].style.color="#69727A"
        }
        items[0].style.color="#000000"
        for(let i=0;i<items.length;i++){
            items[i].addEventListener("click",function (){
                setPlaceHolderNum(i)
                for(let i=0;i<items.length;i++){
                    items[i].style.color="#69727A"
                }
                items[i].style.color="#000000"
            })
        }
    },)

    function RecordDetails(e){
        setInputDetails(e.target.value)
    }
    return (
        <div className="SearchPage">
            <div className="Center-Component">
                <span className="iconfont icon-quxiao  Center-Component-quxiao " title="取消" onClick={ShowSearchPage}>
                </span>
                <div className="SearchPage-Choose-Toggle">
                    <select name="" id="Selected" onChange={GetValueNumber}>
                        <option value="0">常用</option>
                        <option value="1">搜索</option>
                        <option value="2">工具</option>
                        <option value="3">社区</option>
                        <option value="4">生活</option>
                        <option value="5">求职</option>
                    </select>
                    <ul className="Selected-Toggle">
                        {
                            SumArray[whereNumber].map((item,index)=>{
                                return  <li className="SearchPage-Toggle-Item"> {item}</li>
                            })
                        }
                    </ul>
                </div>
                <form action={placeHolderName[whereNumber][placeHolderNum].url} className="SearchPage-Form" method="get" target="_blank">
                    <input type="text" placeholder={placeHolderName[whereNumber][placeHolderNum].placeholder}
                           name={placeHolderName[whereNumber][placeHolderNum].name} autoComplete="off"
                           className="SearchPage-Input"
                           onChange={RecordDetails}
                    />
                    <button type="submit" className="Input-Submit" onClick={IsNull}>
                        <span className="iconfont icon-sousuo"></span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchPage;