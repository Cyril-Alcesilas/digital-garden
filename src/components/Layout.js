import * as React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;