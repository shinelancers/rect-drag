import React from 'react';
import '../style.css';
import '../style1.css';
import logo from '../images/logo.png';
import per from '../images/per.jpg';
import { Link } from 'react-router-dom'
import CommonHeader from './common_header';

// import "https://code.jquery.com/jquery-3.1.1.min.js";
// import "https://code.highcharts.com/stock/highstock.js";
// import "https://code.highcharts.com/stock/modules/exporting.js";
//import "./main.js";
class Home extends React.Component{

    componentWillMount () {
        <div>
            <script src="https://code.highcharts.com/stock/highstock.js"></script>
            <script src="https://code.highcharts.com/stock/modules/exporting.js"></script>
            <script src="./main.js"></script>
        </div>
    }
    render()
    {
        return(
            <div>
                <CommonHeader/>
                <section>
                    <div className="standard">
                        <div className="standard_left">
                            <table className="table_style_home">
                                <tbody>
                                <tr className="tr_style_home">
                                    <th className="th_style_home">Coin</th>
                                    <th className="th_style_home">Price</th>
                                    <th className="th_style_home">Change</th>
                                </tr>
                                </tbody>
                            </table>
                            <div className="left_stand">
                                <table border="0" cellspacing="0" cellpadding="0" className="table_style_home4">
                                    <tbody>
                                    <tr className="open-orderbook" data-toggle="ttt_btc">
                                        <td><Link className="a_style" to={"#"}>TTT/ BTC</Link></td>
                                        <td>0.00003500</td>
                                        <td><span className="red">-6.46%</span></td>
                                    </tr>
                                    <tr id="orderbook-1" data-coinpair="ttt_btc" className="coin-orderbook hidden">
                                        <td colspan="3"></td>
                                    </tr>
                                    </tbody>
                                    <table width="100%" border="0" id="main-tab1" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr data-coinpair="btc_usd">
                                            <td className="td_style_home">
                                                <div className="div_style_home">
                                                    <h1 className="buy">Buy&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table id='trade_history_page' border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" data-item-original-width="637" className='table_two'>
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="28%" className="tr_style_9">Size</td>
                                                                    <td width="32%" className="tr_style_9">Price</td>
                                                                </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                        <div className="div_style_home_2">
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <tbody>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14957.58320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14954.80000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.27</td>
                                                                    <td>14898.35200004</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.59</td>
                                                                    <td>14898.35200003</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.57</td>
                                                                    <td>14898.35200002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14898.35200000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14896.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td><td>14893.49120000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14888.63040000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14883.76960000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14881.96416670</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14881.30000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14878.90880000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14874.04800000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14869.18720000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.32640000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.04220000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14859.46560000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14857.78000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14851.90000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14849.74400000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.16</td>
                                                                    <td>14847.98000008</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>14847.98000002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5.75</td>
                                                                    <td>14847.98000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14847.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14844.88320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14840.02240000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14835.16160000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14830.30080000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.50</td>
                                                                    <td>14825.44000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>5000.00000000</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="div_style_home">
                                                    <h1 className="sell">Sell&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" className="table_two_trdtab" data-item-original-width="637">
                                                                <thead>
                                                                <tr background-color="rgb(38, 41, 43)">
                                                                    <td width="32%" className="td_style_1">Price</td>
										    			<td width="28%" className="td_style_1">Size</td>
												  	</tr>
											  	</thead>
											</table>
										</div>
							  		<div className="div_style_3">
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <thead>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>15585.60000000</td>
                                                                    <td>1.16</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.00000000</td>
                                                                    <td>0.24</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.85680000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.88740000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15621.30000000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15636.60000000</td>
                                                                    <td>0.17</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15646.80000000</td>
                                                                    <td>0.26</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15656.08200001</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15662.10000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15667.20000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15669.15840001</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15671.23104000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.29999998</td>
                                                                    <td>0.19</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.30000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.49762501</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15676.38000000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.31375606</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.39999993</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.40000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15682.50000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15687.60000000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15691.75140000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15692.70000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15694.28100000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15695.86710000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15697.64302187</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15697.80000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15698.38645920</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15701.00790000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </table>
                                <table border="0" cellspacing="0" cellpadding="0" className='table_style_home4'>
                                    <tbody>
                                    <tr className="open-orderbook" data-toggle="ttt_btc">
                                        <td><a className="a_style" to={"#"}>TTT/ BTC</a></td>
                                        <td>0.00003500</td>
                                        <td><span>-6.46%</span></td>
                                    </tr>
                                    <tr id="orderbook-1" data-coinpair="ttt_btc" className="coin-orderbook hidden">
                                        <td colspan="3"></td>
                                    </tr>
                                    </tbody>
                                    <table width="100%" border="0" id="main-tab2" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr data-coinpair="btc_usd">
                                            <td className="td_style_home" >
                                                <div className="div_style_home">
                                                    <h1 className="buy">Buy&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table id="trade_history_page" className="table_two_trdtab" data-item-original-width="637">
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="28%" className='td_style_1'>Size</td>
                                                                    <td width="32%" className='td_style_1'>Price</td>
                                                                </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                        <div className="div_style_home_2">
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <tbody>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14957.58320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14954.80000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.27</td>
                                                                    <td>14898.35200004</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.59</td>
                                                                    <td>14898.35200003</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.57</td>
                                                                    <td>14898.35200002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14898.35200000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14896.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td><td>14893.49120000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14888.63040000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14883.76960000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14881.96416670</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14881.30000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14878.90880000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14874.04800000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14869.18720000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.32640000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.04220000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14859.46560000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14857.78000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14851.90000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14849.74400000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.16</td>
                                                                    <td>14847.98000008</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>14847.98000002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5.75</td>
                                                                    <td>14847.98000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14847.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14844.88320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14840.02240000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14835.16160000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14830.30080000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.50</td>
                                                                    <td>14825.44000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>5000.00000000</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="div_style_home">
                                                    <h1 className="sell">Sell&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" className="table_two_trdtab" data-item-original-width="637">
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="32%" className="td_style_1">Price</td>
										    			<td width="28%" className="tr_style_2">Size</td>
												  	</tr>
											  	</thead>
											</table>
										</div>
							  		<div className="div_style_3">
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <thead>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>15585.60000000</td>
                                                                    <td>1.16</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.00000000</td>
                                                                    <td>0.24</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.85680000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.88740000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15621.30000000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15636.60000000</td>
                                                                    <td>0.17</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15646.80000000</td>
                                                                    <td>0.26</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15656.08200001</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15662.10000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15667.20000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15669.15840001</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15671.23104000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.29999998</td>
                                                                    <td>0.19</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.30000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.49762501</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15676.38000000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.31375606</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.39999993</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.40000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15682.50000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15687.60000000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15691.75140000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15692.70000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15694.28100000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15695.86710000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15697.64302187</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15697.80000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15698.38645920</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15701.00790000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </table>
                                <table className="table_style_home1">
                                    <tbody>
                                    <tr className="open-orderbook" data-toggle="ttt_btc">
                                        <td><a className="a_style" to={"#"}>TTT/ BTC</a></td>
                                        <td>0.00003500</td>
                                        <td><span>-6.46%</span></td>
                                    </tr>
                                    <tr id="orderbook-1" data-coinpair="ttt_btc" className="coin-orderbook hidden">
                                        <td colspan="3"></td>
                                    </tr>
                                    </tbody>
                                    <table width="100%" border="0" id="main-tab3" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr data-coinpair="btc_usd">
                                            <td className="td_style_home">
                                                <div className="div_style_home">
                                                    <h1 className="buy">Buy&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" className="table_two_trdtab">
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="28%" className="td_style_1">Size</td>
                                                                    <td width="32%" className="td_style_1">Price</td>
                                                                </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                        <div className="div_style_home_2">
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <tbody>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14957.58320000</td>1
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14954.80000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.27</td>
                                                                    <td>14898.35200004</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.59</td>
                                                                    <td>14898.35200003</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.57</td>
                                                                    <td>14898.35200002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14898.35200000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14896.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td><td>14893.49120000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14888.63040000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14883.76960000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14881.96416670</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14881.30000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14878.90880000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14874.04800000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14869.18720000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.32640000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.04220000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14859.46560000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14857.78000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14851.90000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14849.74400000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.16</td>
                                                                    <td>14847.98000008</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>14847.98000002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5.75</td>
                                                                    <td>14847.98000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14847.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14844.88320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14840.02240000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14835.16160000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14830.30080000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.50</td>
                                                                    <td>14825.44000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>5000.00000000</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="div_style_home">
                                                    <h1 className="sell">Sell&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table id="trade_history_page" className="table_two_trdtab" data-item-original-width="637">
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="32%" className="tr_style_9">Price</td>
										    			<td width="28%" className='tr_style_9'>Size</td>
												  	</tr>
											  	</thead>
											</table>
										</div>
							  		<div className="div_style_3">
                                                                    <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                        <thead>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td>15585.60000000</td>
                                                                            <td>1.16</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.00000000</td>
                                                                            <td>0.24</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.85680000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.88740000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15621.30000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15636.60000000</td>
                                                                            <td>0.17</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15646.80000000</td>
                                                                            <td>0.26</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15656.08200001</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15662.10000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15667.20000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15669.15840001</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15671.23104000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.29999998</td>
                                                                            <td>0.19</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.30000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.49762501</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15676.38000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.31375606</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.39999993</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.40000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15682.50000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15687.60000000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15691.75140000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15692.70000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15694.28100000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15695.86710000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.64302187</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.80000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15698.38645920</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15701.00790000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </table>
                                <table width="100%" border="0" className="table_style_home4">
                                    <tbody>
                                    <tr className="open-orderbook" data-toggle="ttt_btc">
                                        <td><Link className='a_style' to={"#"}>TTT/ BTC</Link></td>
                                        <td>0.00003500</td>
                                        <td><span className="red">-6.46%</span></td>
                                    </tr>
                                    <tr id="orderbook-1" data-coinpair="ttt_btc" className="coin-orderbook hidden">
                                        <td colspan="3"></td>
                                    </tr>
                                    </tbody>
                                    <table width="100%" border="0" id="main-tab4" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr data-coinpair="btc_usd">
                                            <td className="td_style_home" >
                                                <div className="div_style_home">
                                                    <h1 className="buy">Buy&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table id="trade_history_page" className="table_style_home_2">
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="28%" className="tr_style_9">Size</td>
                                                                    <td width="32%" className="tr_style_9">Price</td>
                                                                </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                        <div className="div_style_home_2">
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <tbody>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14957.58320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14954.80000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.27</td>
                                                                    <td>14898.35200004</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.59</td>
                                                                    <td>14898.35200003</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.57</td>
                                                                    <td>14898.35200002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14898.35200000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14896.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td><td>14893.49120000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14888.63040000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14883.76960000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14881.96416670</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14881.30000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14878.90880000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14874.04800000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14869.18720000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.32640000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.04220000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14859.46560000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14857.78000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14851.90000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14849.74400000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.16</td>
                                                                    <td>14847.98000008</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>14847.98000002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5.75</td>
                                                                    <td>14847.98000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14847.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14844.88320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14840.02240000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14835.16160000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14830.30080000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.50</td>
                                                                    <td>14825.44000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>5000.00000000</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="div_style_home">
                                                    <h1 className="sell">Sell&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table id="trade_history_page" className="table_two_trdtab" data-item-original-width="637">
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="32%" className="tr_style_9">Price</td>
										    			<td width="28%" className="tr_style_9">Size</td>
												  	</tr>
											  	</thead>
											</table>
										</div>
							  		<div className="div_style_3">
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <thead>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>15585.60000000</td>
                                                                    <td>1.16</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.00000000</td>
                                                                    <td>0.24</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.85680000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.88740000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15621.30000000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15636.60000000</td>
                                                                    <td>0.17</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15646.80000000</td>
                                                                    <td>0.26</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15656.08200001</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15662.10000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15667.20000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15669.15840001</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15671.23104000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.29999998</td>
                                                                    <td>0.19</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.30000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.49762501</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15676.38000000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.31375606</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.39999993</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.40000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15682.50000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15687.60000000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15691.75140000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15692.70000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15694.28100000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15695.86710000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15697.64302187</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15697.80000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15698.38645920</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15701.00790000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </table>
                                <table className="table_style_home1">
                                    <tbody>
                                    <tr className="open-orderbook" data-toggle="ttt_btc">
                                        <td><Link className="a_style" to={"#"}>TTT/ BTC</Link></td>
                                        <td>0.00003500</td>
                                        <td><span className="red">-6.46%</span></td>
                                    </tr>
                                    <tr id="orderbook-1" data-coinpair="ttt_btc" className="coin-orderbook hidden">
                                        <td colspan="3"></td>
                                    </tr>
                                    </tbody>
                                    <table width="100%" border="0" id="main-tab5" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr data-coinpair="btc_usd">
                                            <td className="td_style_home" >
                                                <div className="div_style_home">
                                                    <h1 className="buy">Buy&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table id="trade_history_page" className="table_style_home" data-item-original-width="637">
                                                                <thead>
                                                                <tr background-color="rgb(38, 41, 43)">
                                                                    <td width="28%" className="td_style_1">Size</td>
                                                                    <td width="32%" className="td_style_1">Price</td>
                                                                </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                        <div className="div_style_home_2">
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <tbody>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14957.58320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14954.80000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.27</td>
                                                                    <td>14898.35200004</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.59</td>
                                                                    <td>14898.35200003</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.57</td>
                                                                    <td>14898.35200002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14898.35200000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14896.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td><td>14893.49120000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14888.63040000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14883.76960000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14881.96416670</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14881.30000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14878.90880000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14874.04800000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14869.18720000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.32640000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.04220000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14859.46560000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14857.78000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14851.90000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14849.74400000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.16</td>
                                                                    <td>14847.98000008</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>14847.98000002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5.75</td>
                                                                    <td>14847.98000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14847.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14844.88320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14840.02240000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14835.16160000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14830.30080000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.50</td>
                                                                    <td>14825.44000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>5000.00000000</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="div_style_home">
                                                    <h1 className="sell">Sell&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" className="table_two_trdtab" data-item-original-width="637">
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="32%" className="td_style_1">Price</td>
										    			<td width="28%" className="td_style_1">Size</td>
												  	</tr>
											  	</thead>
											</table>
										</div>
							  		<div className="div_style_3">
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <thead>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>15585.60000000</td>
                                                                    <td>1.16</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.00000000</td>
                                                                    <td>0.24</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.85680000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.88740000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15621.30000000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15636.60000000</td>
                                                                    <td>0.17</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15646.80000000</td>
                                                                    <td>0.26</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15656.08200001</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15662.10000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15667.20000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15669.15840001</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15671.23104000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.29999998</td>
                                                                    <td>0.19</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.30000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.49762501</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15676.38000000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.31375606</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.39999993</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.40000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15682.50000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15687.60000000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15691.75140000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15692.70000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15694.28100000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15695.86710000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15697.64302187</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15697.80000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15698.38645920</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15701.00790000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </table>
                                <table width="100%" border="0" className="table_style_home4" cellspacing="0" cellpadding="0">
                                    <tbody>
                                    <tr className="open-orderbook" data-toggle="ttt_btc">
                                        <td><a className="a_style" to={"#"}>TTT/ BTC</a></td>
                                        <td>0.00003500</td>
                                        <td><span className="red">-6.46%</span></td>
                                    </tr>
                                    <tr id="orderbook-1" data-coinpair="ttt_btc" className="coin-orderbook hidden">
                                        <td colspan="3"></td>
                                    </tr>
                                    </tbody>
                                    <table width="100%" border="0" id="main-tab6" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr data-coinpair="btc_usd">
                                            <td className="td_style_home" >
                                                <div className="div_style_home">
                                                    <h1 className="buy">Buy&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table className="table_style_home_2">
                                                                <thead>
                                                                <tr className='tr_style_2'>
                                                                    <td width="28%" className="td_style_1">Size</td>
                                                                    <td width="32%" className="td_style_1">Price</td>
                                                                </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                        <div className='div_style_home_2'>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <tbody>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14957.58320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14954.80000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.27</td>
                                                                    <td>14898.35200004</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.59</td>
                                                                    <td>14898.35200003</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.57</td>
                                                                    <td>14898.35200002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14898.35200000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14896.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td><td>14893.49120000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14888.63040000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14883.76960000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14881.96416670</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14881.30000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14878.90880000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14874.04800000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14869.18720000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.32640000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.04220000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14859.46560000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14857.78000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14851.90000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14849.74400000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.16</td>
                                                                    <td>14847.98000008</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>14847.98000002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5.75</td>
                                                                    <td>14847.98000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14847.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14844.88320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14840.02240000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14835.16160000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14830.30080000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.50</td>
                                                                    <td>14825.44000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>5000.00000000</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="div_style_home">
                                                    <h1 className="sell">Sell&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" className="table_two_trdtab" data-item-original-width="637">
                                                                <thead>
                                                                <tr className='tr_style_2'>
                                                                    <td width="32%" className="td_style_1">Price</td>
										    			<td width="28%" className="td_style_1">Size</td>
												  	</tr>
											  	</thead>
											</table>
										</div>
							  		<div className='div_style_3'>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <thead>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>15585.60000000</td>
                                                                    <td>1.16</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.00000000</td>
                                                                    <td>0.24</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.85680000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15606.88740000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15621.30000000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15636.60000000</td>
                                                                    <td>0.17</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15646.80000000</td>
                                                                    <td>0.26</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15656.08200001</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15662.10000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15667.20000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15669.15840001</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15671.23104000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.29999998</td>
                                                                    <td>0.19</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.30000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15672.49762501</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15676.38000000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.31375606</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.39999993</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15677.40000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15682.50000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15687.60000000</td>
                                                                    <td>0.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15691.75140000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15692.70000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15694.28100000</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15695.86710000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15697.64302187</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15697.80000000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15698.38645920</td>
                                                                    <td>0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15701.00790000</td>
                                                                    <td>0.01</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </table>
                                <table width="100%" border="0" className="table_style_home4" cellspacing="0" cellpadding="0">
                                    <tbody>
                                    <tr className="open-orderbook" data-toggle="ttt_btc">
                                        <td><a className="a_style" to={"#"}>TTT/ BTC</a></td>
                                        <td>0.00003500</td>
                                        <td><span className="red">-6.46%</span></td>
                                    </tr>
                                    <tr id="orderbook-1" data-coinpair="ttt_btc" className="coin-orderbook hidden">
                                        <td colspan="3"></td>
                                    </tr>
                                    </tbody>
                                    <table width="100%" border="0" id="main-tab7" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr data-coinpair="btc_usd">
                                            <td className="td_style_home" >
                                                <div className="div_style_home">
                                                    <h1 className="buy">Buy&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" className="table_style_home_2">
                                                                <thead>
                                                                <tr className='tr_style_2'>
                                                                    <td width="28%" className="tr_style_9">Size</td>
                                                                    <td width="32%" className="tr_style_9">Price</td>
                                                                </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                        <div className="div_style_home_2">
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <tbody>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14957.58320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14954.80000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.27</td>
                                                                    <td>14898.35200004</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.59</td>
                                                                    <td>14898.35200003</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.57</td>
                                                                    <td>14898.35200002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14898.35200000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14896.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td><td>14893.49120000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14888.63040000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14883.76960000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14881.96416670</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14881.30000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14878.90880000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14874.04800000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14869.18720000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.32640000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.04220000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14859.46560000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14857.78000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14851.90000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14849.74400000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.16</td>
                                                                    <td>14847.98000008</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>14847.98000002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5.75</td>
                                                                    <td>14847.98000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14847.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14844.88320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14840.02240000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14835.16160000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14830.30080000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.50</td>
                                                                    <td>14825.44000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>5000.00000000</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="div_style_home">
                                                    <h1 className="sell">Sell&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" className="table_two_trdtab" data-item-original-width="637">
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="32%" className='tr_style_9'>Price</td>
										    			<td width="28%" className='tr_style_9'>Size</td>
												  	</tr>
											  	</thead>
											</table>
										</div>
							  		<div className='div_style_3'>
                                                                    <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                        <thead>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td>15585.60000000</td>
                                                                            <td>1.16</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.00000000</td>
                                                                            <td>0.24</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.85680000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.88740000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15621.30000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15636.60000000</td>
                                                                            <td>0.17</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15646.80000000</td>
                                                                            <td>0.26</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15656.08200001</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15662.10000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15667.20000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15669.15840001</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15671.23104000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.29999998</td>
                                                                            <td>0.19</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.30000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.49762501</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15676.38000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.31375606</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.39999993</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.40000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15682.50000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15687.60000000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15691.75140000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15692.70000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15694.28100000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15695.86710000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.64302187</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.80000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15698.38645920</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15701.00790000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </table>
                                <table width="100%" border="0" className="table_style_home4" cellspacing="0" cellpadding="0">
                                    <tbody>
                                    <tr className="open-orderbook" data-toggle="ttt_btc">
                                        <td><a className="a_style" to={"#"}>TTT/ BTC</a></td>
                                        <td>0.00003500</td>
                                        <td><span className="red">-6.46%</span></td>
                                    </tr>
                                    <tr id="orderbook-1" data-coinpair="ttt_btc" className="coin-orderbook hidden">
                                        <td colspan="3"></td>
                                    </tr>
                                    </tbody>
                                    <table width="100%" border="0" id="main-tab8" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr data-coinpair="btc_usd">
                                            <td className="td_style_home">
                                                <div className="div_style_home">
                                                    <h1 className="buy">Buy&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" className="table_style_home_2">
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="28%" className="tr_style_9">Size</td>
                                                                    <td width="32%" className="tr_style_9">Price</td>
                                                                </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                        <div className='div_style_home_2'>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <tbody>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14957.58320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14954.80000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.27</td>
                                                                    <td>14898.35200004</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.59</td>
                                                                    <td>14898.35200003</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.57</td>
                                                                    <td>14898.35200002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14898.35200000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14896.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td><td>14893.49120000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14888.63040000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14883.76960000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14881.96416670</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14881.30000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14878.90880000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14874.04800000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14869.18720000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.32640000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.04220000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14859.46560000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14857.78000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14851.90000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14849.74400000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.16</td>
                                                                    <td>14847.98000008</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>14847.98000002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5.75</td>
                                                                    <td>14847.98000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14847.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14844.88320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14840.02240000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14835.16160000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14830.30080000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.50</td>
                                                                    <td>14825.44000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>5000.00000000</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="div_style_home">
                                                    <h1 className="sell">Sell&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" className="table_two_trdtab" data-item-original-width="637">
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="32%" className="tr_style_9">Price</td>
										    			<td width="28%" className="tr_style_9">Size</td>
												  	</tr>
											  	</thead>
											</table>
										</div>
							  		<div className="div_style_3">
                                                                    <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                        <thead>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td>15585.60000000</td>
                                                                            <td>1.16</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.00000000</td>
                                                                            <td>0.24</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.85680000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.88740000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15621.30000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15636.60000000</td>
                                                                            <td>0.17</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15646.80000000</td>
                                                                            <td>0.26</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15656.08200001</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15662.10000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15667.20000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15669.15840001</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15671.23104000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.29999998</td>
                                                                            <td>0.19</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.30000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.49762501</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15676.38000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.31375606</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.39999993</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.40000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15682.50000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15687.60000000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15691.75140000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15692.70000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15694.28100000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15695.86710000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.64302187</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.80000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15698.38645920</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15701.00790000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </table>
                                <table width="100%" border="0" className="table_style_home4" cellspacing="0" cellpadding="0" >
                                    <tbody>
                                    <tr className="open-orderbook" data-toggle="ttt_btc">
                                        <td><a className="a_style" to={"#"}>TTT/ BTC</a></td>
                                        <td>0.00003500</td>
                                        <td><span>-6.46%</span></td>
                                    </tr>
                                    <tr id="orderbook-1" data-coinpair="ttt_btc" className="coin-orderbook hidden">
                                        <td colspan="3"></td>
                                    </tr>
                                    </tbody>
                                    <table width="100%" border="0" id="main-tab9" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr data-coinpair="btc_usd">
                                            <td className="td_style_home" >
                                                <div className="div_style_home">
                                                    <h1 className="buy">Buy&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table id="trade_history_page" className="table_style_home_2">
                                                                <thead>
                                                                <tr className='tr_style_2'>
                                                                    <td width="28%" className='tr_style_9'>Size</td>
                                                                    <td width="32%" className='tr_style_9'>Price</td>
                                                                </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                        <div className="div_style_home_2">
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <tbody>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14957.58320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14954.80000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.27</td>
                                                                    <td>14898.35200004</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.59</td>
                                                                    <td>14898.35200003</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.57</td>
                                                                    <td>14898.35200002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14898.35200000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14896.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td><td>14893.49120000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14888.63040000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14883.76960000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14881.96416670</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14881.30000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14878.90880000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14874.04800000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14869.18720000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.32640000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.04220000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14859.46560000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14857.78000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14851.90000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14849.74400000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.16</td>
                                                                    <td>14847.98000008</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>14847.98000002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5.75</td>
                                                                    <td>14847.98000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14847.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14844.88320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14840.02240000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14835.16160000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14830.30080000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.50</td>
                                                                    <td>14825.44000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>5000.00000000</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="div_style_home">
                                                    <h1 className="sell">Sell&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table className="table_style_home_2" id="trade_history_page" >
                                                                <thead>
                                                                <tr className='tr_style_2'>
                                                                    <td width="32%" className='tr_style_9'>Price</td>
										    			<td width="28%" className='tr_style_9'>Size</td>
												  	</tr>
											  	</thead>
											</table>
										</div>
							  		<div className="div_style_3">
                                                                    <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                        <thead>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td>15585.60000000</td>
                                                                            <td>1.16</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.00000000</td>
                                                                            <td>0.24</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.85680000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.88740000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15621.30000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15636.60000000</td>
                                                                            <td>0.17</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15646.80000000</td>
                                                                            <td>0.26</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15656.08200001</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15662.10000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15667.20000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15669.15840001</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15671.23104000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.29999998</td>
                                                                            <td>0.19</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.30000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.49762501</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15676.38000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.31375606</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.39999993</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.40000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15682.50000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15687.60000000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15691.75140000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15692.70000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15694.28100000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15695.86710000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.64302187</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.80000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15698.38645920</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15701.00790000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </table>
                                <table width="100%" border="0" className="table_style_home4" cellspacing="0" cellpadding="0">
                                    <tbody>
                                    <tr className="open-orderbook" data-toggle="ttt_btc">
                                        <td><a className='a_style' to={"#"}>TTT/ BTC</a></td>
                                        <td>0.00003500</td>
                                        <td><span className="red">-6.46%</span></td>
                                    </tr>
                                    <tr id="orderbook-1" data-coinpair="ttt_btc" className="coin-orderbook hidden">
                                        <td colspan="3"></td>
                                    </tr>
                                    </tbody>
                                    <table width="100%" border="0" id="main-tab10" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr data-coinpair="btc_usd">
                                            <td className="td_style_home" >
                                                <div className="div_style_home">
                                                    <h1 className="buy">Buy&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table className="table_style_home_2">
                                                                <thead>
                                                                <tr className='tr_style_2'>
                                                                    <td width="28%" className='tr_style_9'>Size</td>
                                                                    <td width="32%" className='tr_style_9'>Price</td>
                                                                </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                        <div className="div_style_home_2">
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <tbody>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14957.58320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14954.80000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.27</td>
                                                                    <td>14898.35200004</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.59</td>
                                                                    <td>14898.35200003</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.57</td>
                                                                    <td>14898.35200002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14898.35200000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14896.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td><td>14893.49120000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14888.63040000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14883.76960000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14881.96416670</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14881.30000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14878.90880000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14874.04800000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14869.18720000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.32640000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.04220000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14859.46560000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14857.78000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14851.90000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14849.74400000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.16</td>
                                                                    <td>14847.98000008</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>14847.98000002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5.75</td>
                                                                    <td>14847.98000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14847.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14844.88320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14840.02240000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14835.16160000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14830.30080000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.50</td>
                                                                    <td>14825.44000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>5000.00000000</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="div_style_home">
                                                    <h1 className="sell">Sell&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table className="table_style_home_2">
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="32%" className="tr_style_9">Price</td>
										    			<td width="28%" className='tr_style_9'>Size</td>
												  	</tr>
											  	</thead>
											</table>
										</div>
							  		<div className="div_style_3">
                                                                    <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                        <thead>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td>15585.60000000</td>
                                                                            <td>1.16</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.00000000</td>
                                                                            <td>0.24</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.85680000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.88740000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15621.30000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15636.60000000</td>
                                                                            <td>0.17</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15646.80000000</td>
                                                                            <td>0.26</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15656.08200001</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15662.10000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15667.20000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15669.15840001</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15671.23104000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.29999998</td>
                                                                            <td>0.19</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.30000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.49762501</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15676.38000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.31375606</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.39999993</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.40000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15682.50000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15687.60000000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15691.75140000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15692.70000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15694.28100000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15695.86710000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.64302187</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.80000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15698.38645920</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15701.00790000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </table>
                                <table width="100%" border="0" className="table_style_home4" cellspacing="0" cellpadding="0">
                                    <tbody>
                                    <tr className="open-orderbook" data-toggle="ttt_btc">
                                        <td><a className="a_style" to={"#"}>TTT/ BTC</a></td>
                                        <td>0.00003500</td>
                                        <td><span className="red">-6.46%</span></td>
                                    </tr>
                                    <tr id="orderbook-1" data-coinpair="ttt_btc" className="coin-orderbook hidden">
                                        <td colspan="3"></td>
                                    </tr>
                                    </tbody>
                                    <table width="100%" border="0" id="main-tab11" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr data-coinpair="btc_usd">
                                            <td className="td_style_home" >
                                                <div className="div_style_home">
                                                    <h1 className="buy">Buy&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table className="table_style_home_2">
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="28%" className='tr_style_9'>Size</td>
                                                                    <td width="32%" className='tr_style_9'>Price</td>
                                                                </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                        <div className="div_style_home_2">
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <tbody>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14957.58320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14954.80000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.27</td>
                                                                    <td>14898.35200004</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.59</td>
                                                                    <td>14898.35200003</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.57</td>
                                                                    <td>14898.35200002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14898.35200000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14896.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td><td>14893.49120000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14888.63040000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14883.76960000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14881.96416670</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14881.30000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14878.90880000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14874.04800000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14869.18720000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.32640000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.04220000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14859.46560000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14857.78000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14851.90000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14849.74400000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.16</td>
                                                                    <td>14847.98000008</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>14847.98000002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5.75</td>
                                                                    <td>14847.98000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14847.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14844.88320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14840.02240000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14835.16160000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14830.30080000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.50</td>
                                                                    <td>14825.44000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>5000.00000000</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="div_style_home">
                                                    <h1 className="sell">Sell&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" className="table_two_trdtab" data-item-original-width="637">
                                                                <thead>
                                                                <tr className="tr_style_2">
                                                                    <td width="32%" className="tr_style_9">Price</td>
										    			<td width="28%" className="tr_style_9">Size</td>
												  	</tr>
											  	</thead>
											</table>
										</div>
							  		<div className='div_style_3'>
                                                                    <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                        <thead>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td>15585.60000000</td>
                                                                            <td>1.16</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.00000000</td>
                                                                            <td>0.24</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.85680000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.88740000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15621.30000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15636.60000000</td>
                                                                            <td>0.17</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15646.80000000</td>
                                                                            <td>0.26</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15656.08200001</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15662.10000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15667.20000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15669.15840001</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15671.23104000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.29999998</td>
                                                                            <td>0.19</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.30000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.49762501</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15676.38000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.31375606</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.39999993</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.40000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15682.50000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15687.60000000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15691.75140000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15692.70000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15694.28100000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15695.86710000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.64302187</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.80000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15698.38645920</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15701.00790000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </table>
                                <table width="100%" border="0" className="table_style_home4" cellspacing="0" cellpadding="0">
                                    <tbody>
                                    <tr className="open-orderbook" data-toggle="ttt_btc">
                                        <td><a className="a_style" to={"#"}>TTT/ BTC</a></td>
                                        <td>0.00003500</td>
                                        <td><span className="red">-6.46%</span></td>
                                    </tr>
                                    <tr id="orderbook-1" data-coinpair="ttt_btc" className="coin-orderbook hidden">
                                        <td colspan="3"></td>
                                    </tr>
                                    </tbody>
                                    <table width="100%" border="0" id="main-tab12" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr data-coinpair="btc_usd">
                                            <td className="td_style_home">
                                                <div className="div_style_home">
                                                    <h1 className="buy">Buy&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" className="table_two_trdtab" data-item-original-width="637">
                                                                <thead>
                                                                <tr className='tr_style_2'>
                                                                    <td width="28%" className="td_style_1">Size</td>
                                                                    <td width="32%" className="td_style_1">Price</td>
                                                                </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                        <div className='div_style_home_2'>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                <tbody>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14957.58320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14954.80000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.27</td>
                                                                    <td>14898.35200004</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.59</td>
                                                                    <td>14898.35200003</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.57</td>
                                                                    <td>14898.35200002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.05</td>
                                                                    <td>14898.35200000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.04</td>
                                                                    <td>14896.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td><td>14893.49120000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14888.63040000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14883.76960000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14881.96416670</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14881.30000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14878.90880000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14874.04800000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14869.18720000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.32640000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14864.04220000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14859.46560000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14857.78000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.02</td>
                                                                    <td>14851.90000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14849.74400000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.16</td>
                                                                    <td>14847.98000008</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>14847.98000002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5.75</td>
                                                                    <td>14847.98000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14847.00000000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14844.88320000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14840.02240000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14835.16160000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.01</td>
                                                                    <td>14830.30080000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1.50</td>
                                                                    <td>14825.44000001</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>0.00</td>
                                                                    <td>5000.00000000</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="div_style_home">
                                                    <h1 className="sell">Sell&nbsp;Orders</h1>
                                                    <div className="div_sellandbmain">
                                                        <div>
                                                            <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" className="table_two_trdtab" data-item-original-width="637">
                                                                <thead>
                                                                <tr className='tr_style_2'>
                                                                    <td width="32%" className="td_style_1">Price</td>
										    			<td width="28%" className="td_style_1">Size</td>
												  	</tr>
											  	</thead>
											</table>
										</div>
							  		<div className="div_style_3">
                                                                    <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="10" id="trade_history_page" className="table_on">
                                                                        <thead>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td>15585.60000000</td>
                                                                            <td>1.16</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.00000000</td>
                                                                            <td>0.24</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.85680000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15606.88740000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15621.30000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15636.60000000</td>
                                                                            <td>0.17</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15646.80000000</td>
                                                                            <td>0.26</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15656.08200001</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15662.10000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15667.20000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15669.15840001</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15671.23104000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.29999998</td>
                                                                            <td>0.19</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.30000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15672.49762501</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15676.38000000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.31375606</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.39999993</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15677.40000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15682.50000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15687.60000000</td>
                                                                            <td>0.02</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15691.75140000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15692.70000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15694.28100000</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15695.86710000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.64302187</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15697.80000000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15698.38645920</td>
                                                                            <td>0.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>15701.00790000</td>
                                                                            <td>0.01</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </table>
                            </div>
                        </div>
                        <div className="standard_text">
                            <div className="center-first">
                                <select>
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
                            </div>
                            <div className="center-sec">
                                <ul className="sec">
                                    <li><i className="green">0.00003500 BTC(7.50%)</i></li>
                                    <li><span>High </span> <i>0.00036500 BTC</i></li>
                                    <li><span>Low </span> <i>0.00002000 BTC</i></li>
                                </ul>
                            </div>
                            <div className="center-third">
                                <div className="third-sub1">
                                    <img src="https://bitotal.com/webtrader/public/upload/logo/201711181304561360.png"/>
                                </div>
                                <div className="third-sub2">
                                    <p className="green">Name</p> Total Trading Technology<br/>
                                    <p className="green">Status</p> Active<br/>
                                    <p className="green">Release Date</p> 17 Nov 2010
                                </div>
                                <div className="third-sub3">
                                    <p className="green">Website</p> <a href="http://Bitotal.com" className="p_style">Bitotal.com</a>
                                    <p className="green">Announcement</p> <a href="http://https://bitcointalk.org/index.php?topic=1971261.0" className="p_style">https://bitcointalk.org/index.php?topic=1971261.0</a><br/>
                                    <p className="green">Twitter</p> <a href="http://twitter.com/tttcoin" className="p_style">twitter.com/tttcoin</a>
                                </div>
                                <div className="third-sub4">
                                    <p className="green">Total coins</p> 5.000.000<br/>
                                    <p className="green">Description</p> TTT is the cryptocurrencies Index that represent the price movements of Bitcoin and the 20 largest altcoins. The coin is conceived with the intention to create an indication of the whole cryptocurrencies market.<br/>
                                </div>
                            </div>
                            <div className="center-fourth">
                                <br/>
                                    <div id="day-container" className="div_style_8"></div>

                                    <br/>
                            </div>
                            <div className="center-five">
                                <tbody>
                                <tr data-coinpair="btc_usd">
                                    <td>
                                        <div className="div_style_home">
                                            <h1 className="buy">Buy&nbsp;Orders</h1>
                                            <div className="div_sellandbmain">
                                                <div>
                                                    <table border="0" bgcolor="" width="100%" cellspacing="0" cellpadding="0" id="trade_history_page" className="table_two_trdtab" data-item-original-width="637">
                                                        <thead>
                                                        <tr className='tr_style_2'>
                                                            <td width="50%" className="td_style_5">Size</td>
                                                            <td width="50%" className="td_style_6">Price</td>
                                                        </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="div_style_home_2">
                                                    <table id="trade_history_page" className="table_oon">
                                                        <tbody>
                                                        <tr>
                                                            <td>0.05</td>
                                                            <td>14957.58320000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.04</td>
                                                            <td>14954.80000000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.27</td>
                                                            <td>14898.35200004</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1.59</td>
                                                            <td>14898.35200003</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.57</td>
                                                            <td>14898.35200002</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.05</td>
                                                            <td>14898.35200000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.04</td>
                                                            <td>14896.00000000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td><td>14893.49120000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14888.63040000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14883.76960000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.02</td>
                                                            <td>14881.96416670</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14881.30000000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14878.90880000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14874.04800000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14869.18720000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14864.32640000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14864.04220000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14859.46560000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14857.78000001</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.02</td>
                                                            <td>14851.90000000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14849.74400000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.16</td>
                                                            <td>14847.98000008</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.00</td>
                                                            <td>14847.98000002</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5.75</td>
                                                            <td>14847.98000000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14847.00000000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14844.88320000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14840.02240000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14835.16160000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.01</td>
                                                            <td>14830.30080000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1.50</td>
                                                            <td>14825.44000001</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0.00</td>
                                                            <td>5000.00000000</td>
                                                        </tr>
                                                        </tbody>

                                                    </table>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="div_style_home">
                                            <h1 className="sell">Sell&nbsp;Orders</h1>
                                            <div className="div_sellandbmain">
                                                <div>
                                                    <table className="table_style_home_2">
                                                        <thead>
                                                        <tr className="tr_style_2">
                                                            <td width="50%" className="td_style_5">Price</td>
                                                            <td width="50%" className="td_style_6">Size</td>
												  	</tr>
											  	</thead>
											</table>
										</div>
							  		<div className="div_style_3">
                                                    <table id="trade_history_page" className="table_oon">
                                                        <thead>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>15585.60000000</td>
                                                            <td>1.16</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15606.00000000</td>
                                                            <td>0.24</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15606.85680000</td>
                                                            <td>0.02</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15606.88740000</td>
                                                            <td>0.02</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15621.30000000</td>
                                                            <td>0.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15636.60000000</td>
                                                            <td>0.17</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15646.80000000</td>
                                                            <td>0.26</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15656.08200001</td>
                                                            <td>0.01</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15662.10000000</td>
                                                            <td>0.01</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15667.20000000</td>
                                                            <td>0.01</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15669.15840001</td>
                                                            <td>0.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15671.23104000</td>
                                                            <td>0.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15672.29999998</td>
                                                            <td>0.19</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15672.30000000</td>
                                                            <td>0.01</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15672.49762501</td>
                                                            <td>0.01</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15676.38000000</td>
                                                            <td>0.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15677.31375606</td>
                                                            <td>0.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15677.39999993</td>
                                                            <td>0.01</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15677.40000000</td>
                                                            <td>0.01</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15682.50000000</td>
                                                            <td>0.01</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15687.60000000</td>
                                                            <td>0.02</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15691.75140000</td>
                                                            <td>0.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15692.70000000</td>
                                                            <td>0.01</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15694.28100000</td>
                                                            <td>0.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15695.86710000</td>
                                                            <td>0.01</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15697.64302187</td>
                                                            <td>0.01</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15697.80000000</td>
                                                            <td>0.01</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15698.38645920</td>
                                                            <td>0.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>15701.00790000</td>
                                                            <td>0.01</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </div>
                            <div className="center-six">
                                <div className="six-h1">
                                    <h1>TRADE HISTORY</h1>
                                </div>
                                <div className="six-hh">
                                    <table className="table-center">
                                        <tr>
                                            <th>Pair</th>
                                            <th>Type</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th>Total</th>
                                            <th>Date</th>
                                        </tr>
                                        <tbody>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        <tr>
                                            <td>XRP_BTC</td>
                                            <td>BUY</td>
                                            <td>0.00001561 BTC</td>
                                            <td>991.37305519 XRP</td>
                                            <td>0.01547533 BTC</td>
                                            <td>09.12.2017 07:59</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="div_style_7"></div>
                            <div className="center-seven">
                                <div className="seven-tab">
                                    <button onclick="openCity('London')">ACTIVE ORDERS</button>
                                    <button onclick="openCity('Paris')">TRADE HISTORY</button>
                                    <button onclick="openCity('Tokyo')">ORDER HISTORY</button>
                                </div>
                                <div id="London" className="city">
                                    <table className="table-seven">
                                        <tr>
                                            <th>Pair</th>
                                            <th>Amount(XRP)</th>
                                            <th>Price</th>
                                            <th>Total(BTC)</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </table>
                                </div>

                                <div id="Paris" className="w3-container city" className="div_style_16">
                                    <table className="table-center">
                                        <tr>
                                            <th>Pair</th>
                                            <th>Type</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th>Total</th>
                                            <th>Date</th>
                                        </tr>
                                        <tbody>
                                        <tr text-align="center">
                                            <td colspan="6">There are no orders</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div id="Tokyo" className="w3-container city" className="div_style_16">
                                    <table className="table-center">
                                        <tr>
                                            <td colspan="2">
                                                Pair: <select className="seven-select">
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
                                            <th>Amount</th>
                                            <th>Complete%</th>
                                            <th>Total</th>
                                            <th>Date</th>
                                        </tr>
                                        <tbody>
                                        <tr text-align="center">
                                            <td colspan="7">There are no orders</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="center-extra"></div>
                        </div>
                        <div className="standard_image">
                            <div className="stand-right">
                                <div className="r1">
                                    <p>0.00000000 BTC</p>
                                </div>
                                <div className="r2">
                                    <p>0.00000000 BTC</p>
                                </div>
                            </div>
                            <div className="stand-right1">
                                <h1>0.00001601 BTC</h1>
                            </div>
                            <div className="stand-right1">
                                <h2>Bid :0.00001605 BTC</h2>
                                <h2>Ask :0.00001673 BTC</h2>
                            </div>
                            <div className="stand-right2">
                                <div>
                                    <div className="s-button">
                                        <button className="active" onclick="City('Left')">BUY</button>
                                        <button onclick="City('Right')">SELL</button>
                                    </div>
                                    <div id="Left" className="rightside s-r">
                                        <h2>Amount</h2>
                                        <input type="text" name="name" placeholder="0.00000000"/>
                                            <h2>Price</h2>
                                            <input type="text" name="name1" placeholder="0.00000000"/>
                                                <p>0.00000000 BTC</p>
                                                <a to={"#"}>Buy XRP</a>
                                    </div>
                                    <h2>Amount</h2>
                                    <input type="text" name="name" placeholder="0.00000000"/>
                                        <h2>Price</h2>
                                    <input type="text" name="name1" placeholder="0.00000000"/>
                                        <p>0.00000000 BTC</p>
                                        <a to={"#"}>Buy XRP</a>
                                        <br/>
                                            <h4></h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Home;