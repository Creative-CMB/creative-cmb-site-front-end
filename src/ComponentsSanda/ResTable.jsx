import React, { Component } from "react";

class ResTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {" "}
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Ticket Name</th>
                <th>Ticket Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Anna</td>
                <td>Pitt</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Anna</td>
                <td>Pitt</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Anna</td>
                <td>Pitt</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ResTable;
