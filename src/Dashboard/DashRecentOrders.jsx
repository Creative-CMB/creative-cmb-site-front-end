import React, { Component } from 'react';
import { Table, Tag, Space, Card } from 'antd';
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import Item from 'antd/lib/list/Item';
import { Button } from "antd";


const { Column, ColumnGroup } = Table;

class DashRecentOrders extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
         }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        //fetch data from the API
        //demo data
        this.setState({
            data: [
                {
                    key: '1',
                    firstName: 'John',
                    lastName: 'Brown',
                    date: 32,
                    time: 'New York No. 1 Lake Park',
                    type: ['nice', 'developer'],
                },
                {
                    key: '2',
                    firstName: 'Jim',
                    lastName: 'Green',
                    date: 42,
                    time: 'London No. 1 Lake Park',
                    type: ['loser'],
                },
                {
                    key: '3',
                    firstName: 'Joe',
                    lastName: 'Black',
                    date: 32,
                    time: 'Sidney No. 1 Lake Park',
                    type: ['cool', 'teacher'],
                },
            ]
        });
    }
    render() { 

        const data = this.state.data;

        const loop = data.map((item) => {
            return (
              <tr>
                <td>{item.key}</td>
                <td>
                  {item.firstName} {item.lastName}
                </td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.typev}</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>
                  <Button type="primary" danger>
                    Go to event
                  </Button>
                </td>
              </tr>
            );
        });
        return (
          <Card
            options={this.state.options}
            className="dash-card"
            style={{ width: "auto", marginTop: 16 }}
          >
            <p className="dash-top-1">OVERVIEW</p>
            <p className="dash-top-2">RECENT ODERS</p>
            <MDBTable responsive className="dash-order-table">
              <MDBTableHead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Venue</th>
                  <th>Urgernt</th>
                  <th>Actions</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                        {loop}
              </MDBTableBody>
            </MDBTable>
          </Card>
        );
    }
}
 
export default DashRecentOrders;