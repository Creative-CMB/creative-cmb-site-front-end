import React, { Component } from 'react';

class EventListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 

        const { id, itemName,count } = this.props.item;

        return (
          <div className="row item">
            <div className="col-lg-9">
              <input
                disabled
                type="text"
                value={itemName}
                name=""
                id=""
                placeholder="Item name"
              />
            </div>
            <div className="col-lg-2">
              <input disabled  value={count} type="text" name="" id="" placeholder="Count" />
            </div>
            <div className="col-lg-1">
              <a className="btn btn-primary" onClick={this.props.dlt.bind(this,id)}>Del</a>
            </div>
          </div>
        );
    }
}
 
export default EventListItem;