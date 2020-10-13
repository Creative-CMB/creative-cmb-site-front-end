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
import {Space, Button} from 'antd';
import Table from 'react-bootstrap/Table'
import NavApp from "../ComponentKajan/NavApp";








class shali extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            package:[]
         }
    }

    componentDidMount(){
      this.fetchDetails()
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
                <td> <Link to="/packform"> <Button type="button" size="sm"  >Edit</Button></Link></td>
                <td>  <Button type="button" onClick={()=> this.delete(item.pack_id)}>Delete</Button> </td>
             </tr>
          )
       })
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