import React from 'react';
import "./style.scss"
import Layout from "../../Components/Layout/index.jsx";
import TopNav from "../../Components/TopNav/index.jsx";
import LinkItem from "../../Components/LinkItem/index.jsx";

const FirstPage = () => {

    return (
        <div className="FirstPage">
            <Layout/>
            <TopNav/>
            <LinkItem itemName={"Github"} itemContent={"123456"} />

        </div>
    );
};

export default FirstPage;