import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas'; 


class ViewSalary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sal:[],
            selectedSalary:{},
            editMode: false,
            sal_id:'',
            emp_det_id:'',
            dept_id:'',
            basic_sal:'',
            extra_hours:'',
            bonus:'',
            month:'',
            year:'',
            paid:'',
            Paid_Date:''
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
            pdf.save("SalaryDetails.pdf");  
          });  
      }  


    componentDidMount(){
        //fetching the data from bend
        this.fetchEmpDetails();
    }

    fetchEmpDetails = () =>{
        var url = "http://127.0.0.1:8000/Salary-list/";
        axios.get(url).then(res => {
            const sal = res.data;
            this.setState({sal});
        })
        
    }

    render() { 
        return ( 
            <div className="row">
            <div className="col main1" style={{height:"100%"}}>
            <div id="pdfdiv" className="col main1" style={{height:"100%"}}>
                <br></br>
                <h1 style={{color: "DodgerBlue", fontSize: '20px',fontWeight:"bold"}}><center>CMB SALARY DETAILS</center></h1><br></br>
                <div className="table-responsive"
                style={{height:450,
                  overflow:"scroll",  
                  }}>
                            <table className="table" style={{fontSize:"10px"}}>
                                <thead className="theads">
                                <tr>
                                    <th>Salary ID</th>
                                    <th>Employee ID</th>
                                    <th>Department ID</th>
                                    <th>Basic Salary</th>
                                    <th>Extra Hours</th>
                                    <th>Bonus</th>
                                    <th>Total Salary</th>
                                    <th>Month</th>
                                    <th>Year</th>
                                    <th>Paid</th>
                                    <th>Paid Date</th> 
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.sal.map(sal =>{
                                    var extra = sal.extra_hours * 400;
                                    var total = sal.basic_sal + sal.bonus + extra;
                                    return(
                                    <tr>
                                    <td>{sal.sal_id}</td>
                                    <td>{sal.emp_det_id}</td>
                                    <td>{sal.dept_id}</td>
                                    <td>{sal.basic_sal}</td>
                                    <td>{sal.extra_hours}</td>
                                    <td>{sal.bonus}</td>
                                    <td>{total} </td>
                                    <td>{sal.month}</td>
                                    <td>{sal.Year}</td>
                                    <td>{sal.paid}</td>
                                    <td>{sal.Paid_Date}</td>
                                    
                                    </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                            </div>
                           </div>
                           <button style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"black",padding:"5px 20px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} onClick={this.printDocument}  >GET SALARY PDF</button>
                           </div>
        </div>
         );
    }
}
 
export default ViewSalary;