import React, { Component } from 'react';
import DefaultLayout from 'layout/default-layout/index';

class Notification extends Component {
    render () {
        return (
            <DefaultLayout>
                 <div className="row">
                <div className="col-lg-12">
                    <div className="info-box">
                        <h4 className="m-b-2 text-black">Recent Activities</h4>
                        <div className="sl-item sl-primary">
                            <div className="sl-content"><small className="text-muted"><i className="fa fa-user position-left"></i> 5 mins ago</small>
                                <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nullam sagittis mattis arcu uspen disse.</p>
                            </div>
                        </div>
                        <div className="sl-item sl-success">
                        <div className="sl-content"><small className="text-muted"><i className="fa fa-user position-left"></i> 10 mins ago</small>
                            <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nullam sagittis mattis arcu uspen disse.</p>
                        </div>
                        </div>
                        <div className="sl-item sl-danger">
                        <div className="sl-content"><small className="text-muted"><i className="fa fa-user position-left"></i> 8 mins ago</small>
                            <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nullam sagittis mattis arcu uspen disse.</p>
                        </div>
                        </div>
                        <div className="sl-item sl-success">
                        <div className="sl-content"><small className="text-muted"><i className="fa fa-user position-left"></i> 10 mins ago</small>
                            <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nullam sagittis mattis arcu uspen disse.</p>
                        </div>
                        </div>
                        <div className="sl-item sl-warning">
                        <div className="sl-content"><small className="text-muted"><i className="fa fa-user position-left"></i> 12 mins ago</small>
                            <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nullam sagittis mattis arcu uspen disse.</p>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                {/* <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                This is some text within a card block.
                            </div>
                        </div>
                    </div>
                </div> */}
            </DefaultLayout>
        );
    }
}

export default Notification;