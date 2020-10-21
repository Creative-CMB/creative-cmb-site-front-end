import React, { Component } from 'react';
import {
Link
  } from "react-router-dom";
import edi from "../Images/edi.png";
import del from "../Images/del.png";
import gold from "../Images/gold.png";
import silver from "../Images/silver.png";
import platinum from "../Images/platinum.png";
import pack from "../Images/pack.png";
import cusicon from "../Images/AdCustomer.png";
import background from "../Images/background.jpg";
import {Space, Button, Select, Drawer,Form,Input,Col,Row} from 'antd';
import Table from 'react-bootstrap/Table'
import NavApp from "../ComponentKajan/NavApp";




const {Option} = Select;



class shali extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            package:[],
            selectedIndex:"",
            selectedPackage:{},
            value:1,
            visible:false,
            packageName:"",
            packagePrice:"",
            packageType:"",
            packfeatures:"",
         }
    }

    componentWillMount(){
        this.fetchDetails();
      }
     

    componentDidMount(){
        document.title = "CreateCMB | Manage Package";
    }
  
    fetchDetails = () =>{
      console.log('fetching...')
  
      fetch('http://127.0.0.1:8000/package-list/')
      .then(response => response.json())
      .then(data => 
        this.setState({
          package:data
        }) 
        )
    }

    
  delete = (id) => {
    var url = "http://127.0.0.1:8000/package-delete/" + id + "/"
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
    this.state.package
      .filter((item) => item.pack_id === id)
      .map((filterdItem) => this.setState({ selectedPackage: filterdItem }));

    this.setState(
      {
        visible: true,
      },
      () => console.log(this.state.selectedPackage)
    );

    console.log(this.state.selectedPackage);
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
      pack_id :this.state.selectedPackage.pack_id,
      pack_name : this.state.packageName,
      price : this.state.packagePrice,
      pack_type : this.state.packageType,
      featuers : this.state.packfeatures,
     
    };

    

    console.log("data" , data);

    var url = "http://127.0.0.1:8000/package-update/" + this.state.selectedPackage.pack_id + "/";
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



  
  
  
  tableData() {
      var self = this 
      return this.state.package.map((item) => {
          return (
             <tr>
                <td>{item.pack_id}</td>
                <td> {item.pack_name} </td>
                <td> {item.featuers} </td>
                <td> {item.pack_type} </td>
                <td> {item.price} </td>
                <Space size="large">
                 <Button type="button" size="sm" onClick={() => this.showDrawer(item.pack_id)} >Edit</Button>
                 <Button type="button" onClick={()=> this.delete(item.pack_id)}>Delete</Button> 
                 </Space>
             </tr>
          )
       })
  }

 

    render() { 
        return ( 
          
            <div className="pbody" style={{backgroundImage:"url('../Images/background.jpg')"}}>
                <div><NavApp /></div>

            <div className="wrapper1">
                <div className="row">
                <div className="col-sm-4">
                <img style={{position:"relative", left:"-25px",top:"10px"}} src={cusicon}></img>

</div>
                    <div className="col-sm-2">
                <h2>Platinum Customers</h2>
                <div className="adcount">30</div>
     </div>
     </div>
     </div>

<div className="wrapper2">
<div className="row">
    <div className="col-sm-4">

<img style={{position:"relative", left:"-25px",top:"10px"}} src={cusicon}></img>
    </div>

    <div className="col-sm-2">
<h2>Gold Customers</h2>
<div className="adcount">50</div>
</div>
</div>
</div>

<div className="wrapper3">
                <div className="row">

                <div className="col-sm-4">

                <img style={{position:"relative", left:"-25px",top:"10px"}} src={cusicon}></img>
            </div>
                    <div className="col-sm-2">
                <h2>Silver Customers</h2>
                <div className="adcount">55</div>
     
     </div>
     </div>
     
     </div>

            <div className="shali-table-wrapper">
            <div  className = "container" >
                <div >
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className= "table table-hover">
                    <thead style={{backgroundColor:"#3AA1FF", color:"white"}}>
                        <tr>
                        <th>Package Id</th>
                        <th>Package Name</th>
                        <th>Features</th>
                        <th>Package type</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableData()}
                    </tbody>
                </table>
                </div>
                <Link to="/packform"><button type="button" class="btn btn-primary">Add</button></Link>

                <Drawer
            title = "Update Package"
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
                    name="packageName"
                    label="Package Name"
                    rules={[
                      { required: true, message: "Please enter a Package name" },
                    ]}
                  >
                    <Input
                    onChange={this.updateData}
                      placeholder="Please enter Package name"
                      name="packageName"
                      defaultValue={this.state.selectedPackage.pack_name}
                      
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="packagePrice"
                    label="Package Price"
                    rules={[
                      { required: true, message: "Please enter Package Price" },
                    ]}
                  >
                    <Input
                      onChange={this.updateData}
                      placeholder="Please enter Package Price"
                      name="packagePrice"

                      defaultValue={this.state.selectedPackage.price}
                      
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

                      defaultValue={this.state.selectedPackage.pack_type}
                      
                    />
                  </Form.Item>
                </Col>
                    </Row>
                    
                 <Row>  
                <Col span={12}>
                  <Form.Item
                    name="packfeatures"
                    label="Features"
                    rules={[
                      { required: true, message: "Please enter a feature" },
                    ]}
                  >
                    <Input
                      onChange={this.updateData}
                      placeholder="Please enter a feature"
                      name="packfeatures"

                      defaultValue={this.state.selectedPackage.featuers}
                      
                    />
                  </Form.Item>
                </Col>
               
                    </Row>
                    
                      
                    </Form>
          </Drawer>
                <div >


                </div>


                </div>
            </div>

     
     </div>
     
    


     

         
     </div>
         );
    }
}
 
export default shali;