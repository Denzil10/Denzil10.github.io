import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ title, children }) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <link
                    rel="icon"
                    href="twitter.png"
                    type="image/png"
                    sizes="16x16"
                />
            </Helmet>
            {children}
        </div>
    );
};

export default Layout;
