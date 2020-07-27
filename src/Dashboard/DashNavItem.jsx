import React, { Component } from 'react'

class DashNavItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Dash-nav-item row">
                <div className="col=lg-12">
                    <p>{this.props.title}</p>
                </div>
            </div>
         );
    }
}
 
export default DashNavItem;