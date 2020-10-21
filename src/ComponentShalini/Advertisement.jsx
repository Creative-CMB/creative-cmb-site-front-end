import React, { Component } from 'react';
import Card from "../ComponentShalini/Card";
import Exb from '../Images/Exb.jpg';
import final from '../Images/final.jpg';
import concert from '../Images/concert.jpg';
import pepsi from '../Images/pepsiad.png';
import dfcc from '../Images/dfccad.png';
import food from '../Images/food.png';
import "./Css/CardStyle.css";
import Nav from "../ComponentKajan/KajanNav";
import Footer from "../ComponentKajan/HomeFooter";
import { PlusOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';



import { Modal, Button } from 'antd';



class Advertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    render() { 
        return ( 
            <>
            <Nav/>
             <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={Exb} title="Exhibition" para="Mega Exhibition will be held on 27th of november..."
                        link="/advertise"
                />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={final} title="Product Launching" para="Codegen stepping up another stone in technology..."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={concert} title="Music Concert" para="Music concert will be held on 10th of december..."/>
                    </div>
                    <a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:75a2d9be-d4ae-4e5c-b7c4-c17851cdfef9" download>click</a>

                </div> 
               

               
</div>
<div className="container-fluid d-flex justify-content-center">

<div className="row">
                    <div className="col-md-4">
                        <Card style={{width:"50%"}} imgsrc={dfcc} title="Exhibition" para="Mega Exhibition will be held on 27th of november..."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={food} title="Product Launching" para="Codegen stepping up another stone in technology..."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={pepsi} title="Music Concert" para="Music concert will be held on 10th of december..."/>
                    </div>
                </div>
                </div>  
                <div style={{left:"1350px",bottom:"0px",position:"fixed",margin:"50px -40px"}}>
              <Link to="/advertise"> <Button
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          
        >
          Create advertisement
        </Button></Link></div>
            </>

         );
    }
}
 
export default Advertisement;