import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas'; 



class ViewDeptManager extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          manag:[],
          emp_id:'',
          dept_id:'',
          from_date:'',
          to_date:'', 
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
            pdf.save("DepartmentManagerDetails.pdf");  
          });  
      }  

    componentDidMount(){
        //fetching the data from bend
        this.fetchManangerdet();
    }

    fetchManangerdet = () =>{
        var url = "http://127.0.0.1:8000/deptManager-list/";
        axios.get(url).then(res => {
            const manag = res.data;
            this.setState({manag});
        })
        
    }

    render() { 
        return ( 
            <div className="row">
  
            <div className="col main1" style={{height:"100%"}}>
            <div id="pdfdiv" className="col main1" style={{height:"100%"}}>
                <br></br>
                <h1 style={{color: "DodgerBlue", fontSize: '20px',fontWeight:"bold"}}><center>CMB DEPARTMENT MANAGERS</center></h1><br></br>
                   <div className="table-responsive"
                style={{height:450,
                  overflow:"scroll",  
                  }}>
                            <table className="table" style={{fontSize:"10px"}}>
                                <thead className="theads">
                                <tr>
                                    <th>Employee ID</th>
                                    <th>Department ID</th>
                                    <th>From Date</th>
                                    <th>To Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.manag.map((manag) =>{
                                    return(
                                    <tr>
                                    <td>{manag.emp_id}</td>
                                    <td>{manag.dept_id}</td>
                                    <td>{manag.from_date}</td>
                                    <td>{manag.to_date}</td>
                                    </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                            </div>
                        </div>
                        <button style={{width:"100%", cursor: "pointer",backgroundColor:"DodgerBlue",border:"black",padding:"5px 20px",margin:"2px 1px",borderRadius:"2px",fontWeight:"bold"}} onClick={this.printDocument}  >GET DEPARTMENT MANAGER PDF</button>
                       </div>
                      </div>
         );
    }
}
 
export default ViewDeptManager;
