import React, { Component } from 'react';
import logo from './images/logo.jpg';

function DashLogo() {
    return (
        <div className="comp-logo-main row">
            <div className="col-lg-12">
                <img src={logo} alt=""/>
            </div>

        </div>
    );
}

export default DashLogo;