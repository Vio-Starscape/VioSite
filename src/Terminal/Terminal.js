import React from 'react';
import { Helmet } from 'react-helmet';

function Terminal() {

    return (
        <div>
            <Helmet>
                <title>Terminal</title>
                <meta property="og:title" content="Market Terminal"/>
                <meta property="og:description" content="Vio is a company focused on development of starscape market technologies."/>
                <meta property="og:url" content="https://vi-o.tech/terminal"/>
            </Helmet>
            <h1 className="text-center text-9xl">Terminal</h1>
        </div>
    )
}

export default Terminal;