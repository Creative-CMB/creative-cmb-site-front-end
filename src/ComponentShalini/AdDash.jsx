import React, { Component } from 'react';
import AdIcon from "../Images/AdIcon.png";
import Edit from "../Images/edit2.png";
import Delete from "../Images/delete1.png";
import {Space, Button, Select, Drawer,Form,Input,Col,Row} from "antd";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import moment from "moment";


const {Option} = Select;




class AdDash extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          advertistment:[],
          selectedIndex:"",
            selectedAd:{},
            value:1,
            visible:false,
            packageType:"",
            advertisingDate:"",
            duration:"",
            adTitle:"",
         }
    }

    componentWillMount(){
      this.fetchDetails();
    }

    componentDidMount
    (){
      document.title = "CreateCMB | Manage Advertisement";
    }

    fetchDetails = () =>{
      console.log('fetching...')
  
      fetch('http://127.0.0.1:8000/advertisement-list/')
      .then(response => response.json())
      .then(data => 
        this.setState({
          advertistment:data
        }) 
        )
    }
    
    delete = (id) => {
      var url = "http://127.0.0.1:8000/advertisement-delete/" + id + "/"
;
fetch(url,{
    method:"DELETE",
    headers:{
        'Content-type':'application/jason',
    },
}).then((response) => {
    this.fetchDetails()
}).catch(err => console.log(err))
}


showDrawer = (id) => {
  this.state.advertistment
    .filter((item) => item.ad_id === id)
    .map((filterdItem) => this.setState({ selectedAd: filterdItem }));

  this.setState(
    {
      visible: true,
    },
    () => console.log(this.state.selectedAd)
  );

  console.log(this.state.selectedAd);
};

onClose = () => {
  window.location.reload(false);
  this.setState(
    {
      visible: false,
    },
    () => console.log(this.state.visible)
  );
};

sendData = () => {
  
    const data = {
    ad_id :this.state.selectedAd.ad_id,
    date : this.state.advertisingDate,
    duration : this.state.duration,
    ad_type : this.state.packageType,
    ad_title : this.state.adTitle,
   
  };

  

  console.log("data" , data);

  var url = "http://127.0.0.1:8000/advertisement-update/" + this.state.selectedAd.ad_id + "/";
  console.log("data",url);

  fetch(url,{
    method:'POST',
    headers:{
      'Content-type' : 'application/json',
    },
    body:JSON.stringify(data),
  }).then(res => console.log(res.status)).catch(err => console.log(err));
};

updateData = (e) => {
  this.setState({ [e.target.name]: e.target.value });
};

selectData = (e) => {
  this.setState({ type: e[0] });
};


getdate = (e) => {
  this.setState({ date: e });
};



    

AdvertisementData() {
      var self = this 
      return this.state.advertistment.map((item) => {
          return (
  
              
             <tr>
                <td>{item.ad_id}</td>
                <td> {item.duration} </td>
                <td> {item.ad_title} </td>
                <td> {item.date} </td>
                <td> {item.ad_type} </td>
                <Space size="large">
          <button type = "button" class="btn btn-outline-primary" onClick={() => this.showDrawer(item.ad_id)}>Edit</button>
         
          <button type="button" class="btn btn-outline-danger" onClick={()=> this.delete(item.ad_id)}>Delete</button>
  
      </Space>
             </tr>
          )
       })
  }
    

    render() { 
        return ( 
            
            <div>

            <div className="wrapper1">
                <div className="row">
                <div className="col-sm-4">
<div className="addimg1">
    <img src={AdIcon}></img>
</div>
</div>
                    <div className="col-sm-2">
                <h4>Current Ads</h4>
                <count className="adcount">30</count>
     </div>
     </div>
     </div>

<div className="wrapper2">
<div className="row">
    <div className="col-sm-4">
<div className="addimg1">
    <img src={AdIcon}></img>
</div>

    </div>

    <div className="col-sm-2">
<h2>Pending Ads</h2>
<count>{300}</count>
</div>
</div>
</div>

<div className="wrapper3">
                <div className="row">
<div className="addimg1">
    <img src={AdIcon}></img>
</div>

    
                    <div className="Expired">
                <h2>Expired Ads</h2>
                <count>{150}</count>
     </div>
     </div>
     </div>

            <div className="table-wrapper">
     <table class="table">
  <thead>
    <tr>
      <th>adID</th>
      <th>Duration</th>
      <th>Ad Title</th>
      <th>Date</th>
      <th>Package Type</th>
    </tr>
  </thead>
  <tbody>
  {this.AdvertisementData()}

  </tbody>
</table>
<Link to="/advertise"><button type="button" class="btn btn-primary">Add</button></Link>


<Drawer
            title = "Update Advertisemet"
            width="400px"
            onClose = {this.onClose}
            visible={this.state.visible}
            bodyStyle={{paddingBottom:10}}
            footer={
                <div
                  style={{
                    textAlign: "right",
                  }}
                >
             <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                <Button onClick={this.sendData} type="primary">
                  Update
                </Button>
              </div>
            }
          >
              <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="adTitle"
                    label="Ad Title"
                    rules={[
                      { required: true, message: "Please enter a Ad Title" },
                    ]}
                  >
                    <Input
                    onChange={this.updateData}
                      placeholder="Please enter Ad Title"
                      name="adTitle"
                      defaultValue={this.state.selectedAd.ad_title}
                      
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="duration"
                    label="Duration"
                    rules={[
                      { required: true, message: "Please enter Duration" },
                    ]}
                  >
                    <Input
                      onChange={this.updateData}
                      placeholder="Please enter Duration"
                      name="duration"

                      defaultValue={this.state.selectedAd.duration}
                      
                    />
                  </Form.Item>
                </Col>
                    </Row>
                    <Row>
                    <Col span={12}>
                  <Form.Item
                    name="packageType"
                    label="Package Type"
                    rules={[
                      { required: true, message: "Please enter Package Type" },
                    ]}
                  >
                      <Input
                      onChange={this.updateData}
                      placeholder="Please enter Package Type"
                      name="packageType"

                      defaultValue={this.state.selectedAd.ad_type}
                      
                    />
                  </Form.Item>
                </Col>
                    </Row>
                    
                 <Row>  
                <Col span={12}>
                  <Form.Item
                    name="advertisingDate"
                   
                    rules={[
                      { required: true, message: "Please enter a Date" },
                    ]}
                  >
                    <div class='form-group'>
                          <label>
                            Advertising Date
                          </label>
                          <div class='col-lg-9 col-md-9 col-sm-9'>
                          <input type="date"
                           onChange={(value) =>
                            this.getdate(value.format("YYYY-MM-DD"))
                          }
                          name="advertisingDate"
                           onChange={this.updateData}
                           defaultValue={moment(this.state.selectedAd.date)}/>
                          </div>
                        </div>
                  </Form.Item>
                </Col>
               
                    </Row>
                    
                      
                    </Form>
          </Drawer>

</div>
     
     </div>
         );
    }
}
 
export default AdDash;