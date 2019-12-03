import React, { Component } from 'react'
import DefaultLayout from 'layout/default-layout';

export default class UserProfile extends Component {
    render() {
        return (
            <DefaultLayout>
                <div className="content-wrapper"> 
                    <div className="content-header sty-one">
                        <h1>Ecommerce Dashboard</h1>
                        <ol className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><i className="fa fa-angle-right"></i> Ecommerce Dashboard</li>
                        </ol>
                    </div>
                    <div className="content">
                        <div className="row">
                                <div className="col-lg-3">
                                <div className="tile-progress tile-pink">
                                    <div className="tile-header">
                                    <h5>New Orders</h5>
                                    <h3>1250</h3>
                                    </div>
                                    <div className="tile-progressbar"> <span data-fill="65.5%"></span> </div>
                                    <div className="tile-footer">
                                    <h4> <span className="pct-counter">65.5</span>% increase </h4>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3">
                                <div className="tile-progress tile-red">
                                    <div className="tile-header">
                                    <h5>Monthly Sales</h5>
                                    <h3>850</h3>
                                    </div>
                                    <div className="tile-progressbar"> <span data-fill="70%"></span> </div>
                                    <div className="tile-footer">
                                    <h4> <span className="pct-counter">70</span>% increase </h4>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3">
                                <div className="tile-progress tile-cyan">
                                    <div className="tile-header">
                                    <h5>New Users</h5>
                                    <h3>2250</h3>
                                    </div>
                                    <div className="tile-progressbar"> <span data-fill="50%" ></span> </div>
                                    <div className="tile-footer">
                                    <h4> <span className="pct-counter">50</span>% increase </h4>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3">
                                <div className="tile-progress tile-aqua">
                                    <div className="tile-header">
                                    <h5>Feedbacks</h5>
                                    <h3>530</h3>
                                    </div>
                                    <div className="tile-progressbar"> <span data-fill="75.5%" ></span> </div>
                                    <div className="tile-footer">
                                    <h4> <span className="pct-counter">75.5</span>% increase </h4>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-xlg-3">
                            <div className="info-box">
                                <div className="col-12">
                                <div className="d-flex flex-wrap">
                                    <div className="m-b-2">
                                    <h4 className="text-black">Our Customers</h4>
                                    </div>
                                </div>
                                <canvas id="doughnut-chart" height="210"> </canvas>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-7">
                            <div className="info-box">
                                <div className="col-12">
                                <div className="d-flex flex-wrap">
                                    <div className="m-b-1">
                                    <h5>Products Sales</h5>
                                    </div>
                                </div>
                                <canvas id="bar-chart"></canvas>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
            </DefaultLayout>
        )
    }
}
