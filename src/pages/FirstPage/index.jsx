import React from 'react';
import "./style.scss"
import Layout from "../../Components/Layout/index.jsx";
import TopNav from "../../Components/TopNav/index.jsx";
import Segmented from '../../Components/Segmented/index.jsx';

const FirstPage = () => {

    return (
        <div className="FirstPage">
            <Layout/>
            <TopNav/>
            <Segmented/>

        </div>
    );
};

export default FirstPage;