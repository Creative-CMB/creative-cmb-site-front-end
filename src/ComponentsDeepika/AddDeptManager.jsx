import React, { Component } from 'react';
import { Card } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import axios from 'axios';
import { notification} from "antd";

export default class AddDeptManager extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                deptId:[],
                empIdd:'',
                emp_id:'',
                dept_id:'',
                from_date:'',
                to_date:'',              
             }
        }

    
        componentDidMount(){
            this.fetchdm();
        }

        fetchdm = () =>{
            axios.get("http://127.0.0.1:8000/deptManager-list/").then(res=>
            {
                const deptId=res.data;
                this.setState({deptId});
            })
        }

        fetchid = () =>{
            axios.get("http://127.0.0.1:8000/deptManager-list/").then(res=>
            {
                const deptId=res.data;
                this.setState({deptId});
            })
        }

       
        formData = (e) => {
            this.setState({ [e.target.name]: e.target.value });
            this.setState({ radstatus: !this.state.radstatus });

            console.log(
                this.state.dept_id,
                this.state.from_date, 
                
            );
            console.log(this.state.radstatus);
            console.log(this.state.event);
        };

        drop = (e) =>{
            this.setState({[e.target.name]:e.target.value})
            console.log(this.state.event)
        }

        onCreateEmp = () => {
            console.log();
        };

        formSubmit  = (e) =>{
            e.preventDefault();
        

        const dmData ={
            emp_id : this.state.emp_id,
            dept_id : this.state.dept_id,
            from_date : this.state.from_date,
            to_date : this.state.to_date,

        };

        console.log(dmData)

        const args = {
            description:
              "Data added successfully",
            duration: 0,
          };
          notification.open(args);

        var url = "http://127.0.0.1:8000/deptManager-Create/";

        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(dmData)

        }).then((response)=>{
            alert(response)
        }).catch(function(err){
            alert(err)
        })
    }
       
       
    render() {
        return (
            <div>

            <div className="row">
        
            <div className="col-lg-1.5 side" 
                style={{
                    backgroundColor:"LightBlue",
                    height:"650px"}}
                    >
                {/*Navigation bar */}
                <br></br>
                <EmployeeSideNavBar />
            </div>

            <div className="col main">
            {/*Middle page components */}
            <br></br>
                <h1   
                    style={{
                        color: "DodgerBlue",
                        fontSize: '30px',
                        fontWeight:"bold"}}
                        ><center>ADD MANAGERS FOR DEPARTMENTS</center>
                </h1>
                <br></br><br></br><br></br><br></br>
                <form onSubmit= {this.formSubmit}
                    style={{
                        fontSize: '15px',
                        fontWeight:"bold"}}
                        >
                <Card style={{ width: 600 }}>
                
                    Employee ID : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="emp_id"></input><br></br><br></br>
                    Department ID : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="dept_id"></input><br></br><br></br>
                    From : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="date"onChange= {this.formData} name="from_date"></input><br></br><br></br>
                    To : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="date"  onChange= {this.formData} name="to_date"></input><br></br><br></br>   
                
                </Card>
                

                <div>
                <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add Manager"></input>
                </div>
                </form>
                <div>
                

                
                </div>
                </div>
            </div>
            </div>
        )
    }
}
