import React, { Component } from "react";

class EventAddDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="light-sub-topic">
          <p>ADDITIONAL DETAILS</p>
        </div>
        <div className="event-card form-card adddet">
          <form action="" style={{ height: "auto" }}>
            <div className="row item">
              <div className="col-lg-1">
                <p>BUDGET</p>
              </div>
              <div className="col-lg-11">
                <input type="text" />
              </div>
            </div>

            <div className="row item">
              <div className="col-lg-2">
                <p>APPROX. HEAD COUNT</p>
              </div>
              <div className="col-lg-10">
                <input type="text" />
              </div>
            </div>

            <div className="row item">
              <div className="col-lg-3">
                <p>OCCATION TYPE (DAY/NIGHT)</p>
              </div>
              <div className="col-lg-9">
                <input type="text" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EventAddDetails;
