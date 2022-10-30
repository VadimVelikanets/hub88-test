import React from 'react';
import {LayoutProps} from "./types";
import './Layout.scss';

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="layout">
            <div className="container">
                {children}
            </div>
        </div>
    );
};

export default Layout;