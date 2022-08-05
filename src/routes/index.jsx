import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import FirstPage from "../pages/FirstPage/index.jsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;