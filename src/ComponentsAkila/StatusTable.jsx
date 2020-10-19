import React, { Component } from 'react';
import { Table, Tag, Space,Popconfirm, message,Switch,Modal, Button,Descriptions, Badge  } from 'antd';

class StatusTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            actions: [],
            tableData: [],
            tableCols: [],
            visible: false,
            selectedEvent : {}
         }
    }

     componentDidMount() {
         this.fetchData()
         
    }

    fetchData = () => {
        var obj = {}
        var list = [];

        fetch("http://127.0.0.1:8000/actions/").then(res => res.json()).then(data => {
            this.setState({ actions: data })
            this.state.actions.map(item => {
                
                    obj = {
                        key: item.event_id,
                        name: item.event_id,
                        age: item.date,
                        address: item.location,
                        tags: [item.status],
                }
                list.push(obj)
            })
            this.setState({ tableData: list })
            console.log(list)
        }).catch(err => console.log(err))

                        const columns = [
            {
                title: 'Event Name',
                dataIndex: 'name',
                key: 'name',
                render: text =>  <Button type="primary" onClick={() => this.showModal(text)}>
          {text}
        </Button>,
            },
            {
                title: 'Date',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Status',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                <>
                    {tags.map(tag => {
                        let color; //= tag  ? 'geekblue' : 'green';
                        let status;

                        if (tag) {
                            color = 'green'
                            status = "Confirmed"
                        } else {
                            color = 'red'
                            status = "Has to Confirm"
                        }

                    return (
                        <Tag color={color} key={tag}>
                        {status}
                        </Tag>
                    );
                    })}
                </>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                <Space size="middle">
                        <Switch checkedChildren="Un-Confirm" unCheckedChildren="Confirm" defaultChecked={record.tags} onChange={(e) => this.switch(e,record.name)}/>
                        <Popconfirm
                    title="Are you sure delete this event?"
                    onConfirm={() => this.confirm(record.name)}
                    onCancel={this.cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <a href="#">Delete</a>
                </Popconfirm>
                </Space>
                ),
            },
        ];
        
        this.setState({tableCols : columns})
    }

        confirm = (e) => {
        console.log(e);
        
        var url = "http://127.0.0.1:8000/event-delete/" + e;

        fetch(url, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        },
        })
        .then((response) => {
            if (response.status === 200) {
                this.fetchData()
                message.success(e);
            }
        })
        .catch((err) => console.log(err));
    }

    cancel = (e) => {
    console.log(e);
    message.error('Click on No');
    }

    switch = (e,id) => {
        //alert(e)
        if (e) {
            const data = {
                status : e
            }
            var url = "http://127.0.0.1:8000/event-status/" + id + "/"
            fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(data)
            }).then(res => {
                if (res.status == 200) {
                     this.fetchData()
                }
            }).catch(err => console.log(err))

           
        } else {
             const data = {
                status : e
            }
            var url = "http://127.0.0.1:8000/event-status/" + id + "/"
            fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(data)
            }).then(res => {
   
                if (res.status == 200) {
                     this.fetchData()
                }
            }).catch(err => console.log(err))

            this.fetchData()
        }
    }


    tableData = () => {
        console.log(this.state.actions)
        var obj = {}
        var list = [];
        var tabledata = this.state.actions.map(item => {
            obj = {
                    key: item.event_id,
                    name: item.event_id,
                    age: item.date,
                    address: item.location,
                    tags: [item.status],
            }
            list.push(obj);
            this.setState({ tableData: list })
            console.log(this.state.tableData)
        })
    }

     showModal = (id) => {
    this.setState({
      visible: true,
    });
         
         var url = "http://127.0.0.1:8000/events/" + id + "/"
         fetch(url).then(data => data.json()).then(res => this.setState({ selectedEvent: res })).catch(err => console.log(err))
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

    render() { 
        return ( 
            <div className="mt-4">
                <Table columns={this.state.tableCols} dataSource={this.state.tableData} />

                <Modal
                    width="80%"
            title={"EVENT ID : "+this.state.selectedEvent.event_id}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            >
                <Descriptions title="Event Details" bordered>
                        <Descriptions.Item label="Event ID" span={3}>{this.state.selectedEvent.event_id}</Descriptions.Item>
                        <Descriptions.Item label="Event Name" span={3}>{this.state.selectedEvent.event_name}</Descriptions.Item>
                        <Descriptions.Item label="Status" span={3}>
                            <Badge status={this.state.selectedEvent.status ? "success" : "error"} text={this.state.selectedEvent.status ? "Confirmed":"Not Confirmed"} />
                        </Descriptions.Item>
                        <Descriptions.Item label="Budget" span={3}>Rs.{this.state.selectedEvent.budget}</Descriptions.Item>
                    <Descriptions.Item label="Email Address" span={3}>
                        <a href={"mailto:"+this.state.selectedEvent.email_address}>{this.state.selectedEvent.email_address}</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Occassion Type" span={3}>
                        {this.state.selectedEvent.occassion_type}
                    </Descriptions.Item>
                    </Descriptions>
                    <Descriptions bordered>
                        <Descriptions.Item label="Time" >{this.state.selectedEvent.time}</Descriptions.Item>
                        <Descriptions.Item label="Head Count" >{this.state.selectedEvent.head_count}</Descriptions.Item>
                        <Descriptions.Item label="Phone" >
                            <a href={"tel:" + this.state.selectedEvent.creator_phone}>{this.state.selectedEvent.creator_phone}</a>
                        </Descriptions.Item>
                        <Descriptions.Item label="Schedule File" span={3}><a href={this.state.selectedEvent.schedule_file}>{this.state.selectedEvent.schedule_file}</a></Descriptions.Item>
                    <Descriptions.Item label="Event Date" >
                    {this.state.selectedEvent.date}
                    </Descriptions.Item>
                    <Descriptions.Item label="Event Type">
                            {this.state.selectedEvent.event_type}
                    </Descriptions.Item>
                    </Descriptions>
                     <Descriptions bordered>
                        <Descriptions.Item label="Location" span={3}>{this.state.selectedEvent.location}</Descriptions.Item>
                        <Descriptions.Item label="Description" span={3}>{this.state.selectedEvent.description}</Descriptions.Item>
                        <Descriptions.Item label="Creator Name" span={3}>
                            {this.state.selectedEvent.event_creator_name}
                        </Descriptions.Item>
                </Descriptions>
            </Modal>
            </div>
         );
    }
}
 
export default StatusTable;