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
                   

                </div> 
               

               
</div>
<div className="container-fluid d-flex justify-content-center">

<div className="row">
                    <div className="col-md-4">
                        <Card style={{width:"50%"}} imgsrc={dfcc} title="Discounts" para="20% huge Discounts on House of Fashion..."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={food} title="Food Fest" para="Be ready on 30 and 31st with our meals..."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={pepsi} title="Pepsi Offer" para="Buy Pepsi and be a Winner of Iphone..."/>
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