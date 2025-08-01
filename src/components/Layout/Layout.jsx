import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Layout;