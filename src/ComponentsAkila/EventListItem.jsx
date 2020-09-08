import React, { Component } from 'react';

class EventListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 

        const { id, itemName,count } = this.props.item;

        return (
          <div className="row item" style={{height:"20px",marginTop:"20px"}}>
            <div className="col-lg-9">
              <input
                disabled
                type="text"
                value={itemName}
                name=""
                id=""
                placeholder="Item name"
                style={{ width: "100%", backgroundColor:"#eceef9",border:"none",outline:"none",padding:"2px",borderRadius:"10px",paddingLeft:"15px",textAlign:"center"}}
              />
            </div>
            <div className="col-lg-2">
              <input
                disabled
                value={count}
                type="text"
                name=""
                id=""
                placeholder="Count"
                style={{ width: "100%", backgroundColor: "#eceef9", border: "none", outline: "none", padding: "2px", borderRadius: "10px", paddingLeft: "15px", textAlign: "center" }}
              />
            </div>
            <div className="col-lg-1">
              <a
                className="btn btn-primary"
                style={{ color: "white" }}
                onClick={this.props.dlt.bind(this, id)}
              >
                Del
              </a>
            </div>
          </div>
        );
    }
}
 
export default EventListItem;