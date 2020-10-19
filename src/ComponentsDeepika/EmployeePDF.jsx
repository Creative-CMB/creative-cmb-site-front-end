import React, { useRef } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas'; 


export default class EmployeePDF extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            admin_id:'',
            emp_det_id:'',
            employee_name:'',
            primary_phone:'',
            secondary_phone:'',
            position:'',
            address:'',
            email:'',
            qualification:'',
            trained_years:'',
            dob:'',
            gender:'',
            permenent:'',
            joined_date:'',
         }
    }
    

    printDocument() {  
        const input = document.getElementById('pdfdiv');  
        html2canvas(input)  
          .then((canvas) => {  
            var imgWidth = 200;  
            var pageHeight = 290;  
            var imgHeight = canvas.height * imgWidth / canvas.width;  
            var heightLeft = imgHeight;  
            const imgData = canvas.toDataURL('image/png');  
            const pdf = new jsPDF('p', 'mm', 'a4')  
            var position = 0;  
            var heightLeft = imgHeight;  
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
            pdf.save("EmployeeDetails.pdf");  
          });  
      }  


    componentDidMount(){
        this.fetchEmpDetails();
    } 

    fetchEmpDetails = () =>{
        var url = "http://127.0.0.1:8000/EmployeeDetail-list/";
        axios.get(url).then(res => {
            const data = res.data;
            this.setState({data});
        })       
    };
     

    

    render() { 
        return ( 
                <div className="row">                
                    <div  className="col main1" style={{height:"100%"}}>
                        <div id="pdfdiv" className="col main1" style={{height:"100%"}}>
                        <br></br>
                        <h1 style={{color: "DodgerBlue", fontSize: '20px',fontWeight:"bold"}}><center>CREATIVE CMB EMPLOYEE DETAILS</center></h1>
                        <div>
                            <div className="table-responsive">
                            <table className="table" style={{fontSize:"10px"}}>
                                <thead className="theadss">
                                <tr>
                                    <th>Employee ID</th>
                                    <th>Employee Name</th>                                  
                                    <th>Primary Phone</th>
                                    <th>Secondary Phone</th>
                                    <th>Position</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                    <th>Trained Years</th>
                                    <th>Joined Date</th>    
                                </tr>
                                </thead>
                                <tbody >
                                {this.state.data.map(user =>{
                                    return(
                                    <tr>
                                    <td>{user.emp_det_id}</td>
                                    <td>{user.employee_name}</td>
                                    <td>{user.primary_phone}</td>
                                    <td>{user.secondary_phone}</td>
                                    <td>{user.position}</td>
                                    <td>{user.address}</td>
                                    <td>{user.email}</td>
                                    <td>{user.trained_years}</td>
                                    <td>{user.joined_date}</td>
                                    </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                        <button style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"black",padding:"5px 20px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} onClick={this.printDocument}  >GET EMPLOYEE PDF</button>
                    </div>   
                    
                </div>
                
         );
    }
}