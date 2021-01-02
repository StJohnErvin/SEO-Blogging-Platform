import Header from './Header';
import React from 'react';
import ReactDOM from 'react-dom';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    );
};

export default Layout;