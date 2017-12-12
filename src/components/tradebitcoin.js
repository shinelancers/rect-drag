import React, { Component } from 'react';
import '../style.css';
import logo from '../images/logo.png';

class tradebitcoin extends Component {
    render() {
        return (
            <div className='head_bar'>
                <div className="container">
                    <div className="logo">
                        <a href="#"><h2><img src="images/logo.png"/></h2></a>
                    </div>
                    <div className="menu">
                        <div className="maindiv">
                            <div className="hamburger">

                            </div>
                        </div>
                        <ul>
                            <li><a href="#">Trade</a></li>
                            <li><a href="#">Funds</a></li>
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Account</a></li>
                            <li><a id="searchbychar" href="#">User</a></li>
                            <li><a id="log-out" href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default tradebitcoin;
