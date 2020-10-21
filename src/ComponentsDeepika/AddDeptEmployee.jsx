import React, { Component } from 'react';
import { Card } from 'antd';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import axios from 'axios';
import { notification} from "antd";
import jsPDF from "jspdf"
import "jspdf-autotable"

export default class AddDeptEmployee extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                empId:[],
                deptId:[],
                emp_id:'',
                dept_id:'',
                from_date:'',
                to_date:''                
             }
        }

        generatePDF = (managerdata) => {
            //initilize the pds
            const doc = new jsPDF();
            const datas=[
                managerdata.from_date,
                managerdata.to_date,
            ];
        
            const tableColumns = ["Employee  Id", "Department ID"];
            const tableRows = [];
        
            const rowdata = [
                managerdata.emp_id,
                managerdata.dept_id,
             
            ];
        
            tableRows.push(rowdata);
        
            doc.autoTable(tableColumns, tableRows, { startY: 60 });
            doc.text("Appointment Details. ",80 , 15);
            doc.text("Creative CMB ",14 , 30);
            doc.text("No:123, Perera lane, Colombo. ",14 , 35);
            doc.text("_________________________________________________________________________________________________________________________________________________ ",14 , 40);
            doc.setFont('helvetica');
            doc.text(managerdata.emp_id + ", You have selected as a employee to the department " + managerdata.dept_id +".", 14, 50);
            doc.setFont('helvetica');
            doc.text("We are warmly welcome you to Creative CMB Team. ",14 , 55);
            doc.text("Joined Date : " +managerdata.from_date+"",14 , 90);
            doc.text("Renew Date : " +managerdata.to_date+"",14 , 100);
            doc.text("Near the renew date we will check tour working capacity and performance. ",14 ,115 );
            doc.text("Then we change your position higher or lower. ",14 ,120 );
            doc.text("For more clarification please contact your senior manager.",14 , 135);
            doc.text("Mr.Peter",14 , 145);
            doc.text("Senior head Manager",14 , 151);
            doc.text("0768777143",14 , 157);
            doc.text("Thankyou and Conguraglation",120 , 170);
            doc.text("Team Creative CMB",120 , 177);

            doc.save(`Welcome_${managerdata.emp_id}.pdf`);
        
          }
        
        componentDidMount(){
            this.fetchAdmins();
        }

        fetchAdmins = () =>{
            axios.get("http://127.0.0.1:8000/admin-list/").then(res=>
            {
                const admins=res.data;
                this.setState({admins});
            })
        }

       
        formData = (e) => {
            this.setState({ [e.target.name]: e.target.value });
            this.setState({ radstatus: !this.state.radstatus });

            console.log(
                this.state.emp_id,
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

        onCreateDeptEmp = () => {
            console.log();
        };

        formSubmit  = (e) =>{
            e.preventDefault();
        

        const dempData ={
            emp_id : this.state.emp_id,
            dept_id : this.state.dept_id,
            from_date : this.state.from_date,
            to_date : this.state.to_date,
        };
        this.generatePDF(dempData);

        console.log(dempData)

        const args = {
            description:
              "Data added successfully",
            duration: 0,
          };
          notification.open(args);

        var url = "http://127.0.0.1:8000/deptEmp-Create/";

        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(dempData)

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
                    <h1 style={{color: "DodgerBlue", fontSize: '30px', fontWeight:"bold"}}><center>ADD EMPLOYEES FOR DEPARTMENTS</center></h1><br></br><br></br><br></br><br></br>
                    <form   onSubmit= {this.formSubmit}  
                            style={{ 
                                fontSize: '15px',
                                fontWeight:"bold"}}
                                >   
                    <Card style={{ width: 600 }}>

                        
                            Employee ID : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="emp_id"></input><br></br><br></br>
                            Department ID : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="text" onChange= {this.formData} name="dept_id" ></input><br></br><br></br>
                            From : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="date"onChange= {this.formData} name="from_date"></input><br></br><br></br>
                            To : <input required style={{border: "3px solid #ccc",float: "right",width: "68%",height:30}} type="date"  onChange= {this.formData} name="to_date"></input><br></br><br></br>
                        
                    </Card>

                    <br></br><br></br><br></br><br></br>
                    <div>
                    <input style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"none",padding:"12px 28px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} type="submit" value="Add Employee"></input>
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
