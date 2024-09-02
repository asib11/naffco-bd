// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../pages/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;