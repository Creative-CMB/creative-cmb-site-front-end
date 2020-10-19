import React, { Component } from 'react';
import about from "../Images/about.png";


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                    <div className="row">
                        <div className="col">
                        <h3 style={{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"bold",position:"relative",left:"700px",top:"400px"}}>About Us</h3>

                        </div>
                    </div>
                <div style={{position:"relative",left:"500px",top:"500px"}}>
                    <img style={{height:"70%",width:"70%"}} src={about}></img>
                    
                </div>
                <div className="row">
                    <div className="col-lg-6 mt-5 d-flex flex-column p-4">
                        <div className="col-lg-6 offset ml-3 mt-5">
                        <h5 style={{fontFamily:"Roboto", color:"rgba(4, 4, 4, 0.63)",position:"relative",left:"150px",bottom:"200px"}} >We are "ONE STOP SHOP" for your event.
Young Dynamic & Professional Team with Creative & new Innovative Ideas to unique your event from others....
Let us Know Your Requirement....
We can make it fit for your Budget... Less

</h5>
</div>
                    </div>
                    
                    

                </div>
            </>
         );
    }
}
 
export default About;