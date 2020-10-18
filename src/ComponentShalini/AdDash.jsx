import React, { Component } from 'react';
import AdIcon from "../Images/AdIcon.png";
import Edit from "../Images/edit2.png";
import Delete from "../Images/delete1.png";
import {Space} from "antd";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import "./Css/shali.css";







class AdDash extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          advertistment:[],
         }
    }

    componentDidMount
    (){
      this.fetchDetails()
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
          <button type = "button" class="btn btn-outline-primary">Edit</button>
         
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

</div>
     
     </div>
         );
    }
}
 
export default AdDash;