import React from 'react';
import '../style.css';
import '../style1.css';
import logo from '../images/logo.png';
import per from '../images/per.jpg';
import { Link } from 'react-router-dom'
import Commonmenu from "./commonmenu";

class Orders extends React.Component{
    render(){
        return(
            <div>
                <div className="head_bar">
                    <div className="container">
                        <div className="logo">
                            <a href="#"><h2><img src={logo}/></h2></a>
                        </div>
                        <div className="menu">
                            <div className="maindiv">
                                <div className="hamburger">

                                </div>
                            </div>
                            <ul>
                                <li><Link to={'/home'}>Trade</Link></li>
                                <li className="dropdown"><Link to={'/funds'} className="dropbtn">Funds</Link>
                                    <div className="dropdown-content">
                                        <Link to={'/funds'}>funds</Link>
                                        <Link to={'/withdraw'}>Withdraw history</Link>
                                    </div>
                                </li>
                                <li className="dropdown"><Link to={'/orders'} className="dropbtn">Orders</Link>
                                    <div className="dropdown-content">
                                        <Link to={'/orders'}>Open Orders</Link>
                                        <Link to={'/tradehistory'}>Trade history</Link>
                                    </div>
                                </li>
                                <li className="dropdown"><Link to={'/account'} className="dropbtn">Account</Link>
                                    <div className="dropdown-content">
                                        <Link to={'/editprofile'}>Edit profile</Link>
                                        <Link to={'/docs'}>Verify account</Link>
                                        <Link to={'/changepassword'}>Change password</Link>
                                        <Link to={'/Api keys'}>Api keys</Link>
                                    </div>
                                </li>
                                <li><Link id="searchbychar" to={'#'}>User</Link></li>
                                <li><Link id="logout" to={'#'}>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="standard">
                        <div className="standard_text1">
                            <div className="center-seven">
                                <div id="Tokyo" className="w3-container city" >
                                    <table>
                                        <tr>
                                            <td colspan="2">
                                                Pair: <select className="seven-select">
                                                <option>All</option>
                                                <option>TEME/BTC</option>
                                                <option>TTT/BTC</option>
                                                <option>TTT/USD</option>
                                                <option>TSOFT/BTC</option>
                                                <option>TENTE/BTC</option>
                                                <option>TEME/BTC</option>
                                                <option>BTC/USD</option>
                                                <option>ETH/BTC</option>
                                                <option>BCC/BTC</option>
                                                <option>XRP/BTC</option>
                                                <option>DASH/BTC</option>
                                                <option>NEO/BTC</option>
                                                <option>XMR/BTC</option>
                                                <option>XEM/BTC</option>
                                                <option>ETC/BTC</option>
                                                <option>LTC/BTC</option>
                                                <option>LSK/BTC</option>
                                                <option>DEVS/BTC</option>
                                                <option>DEVS/USD</option>
                                            </select>
                                            </td>
                                            <td colspan="3">
                                                Type: <select className="seven-select">
                                                <option>All</option>
                                                <option>Sell</option>
                                                <option>Buy</option>
                                            </select>
                                            </td>
                                            <td colspan="2">
                                                Show: <select className="seven-select">
                                                <option>All</option>
                                                <option>Active</option>
                                                <option>Filld</option>
                                                <option>Partly filled</option>
                                                <option>canceled</option>
                                            </select>
                                            </td>
                                        </tr>
                                    </table>
                                    <table className="table-center">
                                        <tr>
                                            <th>Pair</th>
                                            <th>Type</th>
                                            <th>Original Price</th>
                                            <th>Average Price</th>
                                            <th>Amount</th>
                                            <th>Complete%</th>
                                            <th>Total</th>
                                            <th>Date</th>
                                        </tr>
                                        <tbody>
                                        <tr className="tr_style">
                                            <td colspan="8">There are no orders</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="center-extra"></div>
                        </div>
                        <Commonmenu/>
                    </div>
                </section>
            </div>
        );
    }
}
export default Orders;