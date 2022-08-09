import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import FirstPage from "../pages/FirstPage/index.jsx";
import Inclusion from '../pages/Inclusion/index.jsx';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstPage/>}></Route>
                <Route path='/include' element={<Inclusion></Inclusion>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;