import Header from './Header';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;