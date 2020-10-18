import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas'; 


class ViewDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            department:[],
            admin_id:'',
            dept_id:'',
            dept_name:'',
            dept_manager_name:'',
            
         };
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
            pdf.save("DepartmentDetails.pdf");  
          });  
      }  

    componentDidMount(){
        //fetching the data from bend
        this.fetchDepartment();
    }

    fetchDepartment = () =>{
        var url = "http://127.0.0.1:8000/department-list/";

        axios.get(url).then(res => {
            const department = res.data;
            this.setState({department});
        })
        
    }

    render() { 
        return ( 
            <div className="row">
  
            <div className="col main1" style={{height:"100%"}}>
            <div id="pdfdiv" className="col main1" style={{height:"100%"}}>
  
                <br></br>
                <h1 style={{color: "DodgerBlue", fontSize: '20px',fontWeight:"bold"}}><center>CREATIVE CMB DEPARTMENT</center></h1><br></br>
                        <div className="table-responsive"
                        style={{height:450,
                          overflow:"scroll",
                          alignContent:"center"  
                          }}>
                            <center><table className="table" style={{fontSize:"15px"}}>
                                <thead className="theads" width="80%">
                                <tr>
                                    <th>Department ID</th>
                                    <th>Admin ID</th>
                                    <th>Department Name</th>
                                    <th>Manager of the Department</th>
                                   
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.department.map((department) =>{
                                    return(
                                    <tr>
                                    <td>{department.dept_id}</td>
                                    <td>{department.admin_id}</td>
                                    <td>{department.dept_name}</td>
                                    <td>{department.dept_manager_name}</td>
                                    </tr>
                                    );
                                })}
                                </tbody>
                            </table></center>      
                            </div>
                              </div>
                              <button style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"black",padding:"5px 20px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} onClick={this.printDocument}  >GET DEPARTMENT PDF</button>
                              </div>
            </div>
  
        
         );
    }
}
 
export default ViewDepartment;
