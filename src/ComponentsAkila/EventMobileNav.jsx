import React, { Component } from 'react';
import drop from '../Images/drop.png'



 class EventMobileNav extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     render() { 
         return ( 
             <nav className="mini-navbar">
                 <div className="row">
                     <div className="col">
                        <img src={drop} alt=""/>
                     </div>
                 </div>
           </nav>
          );
     }
 }
  
 export default EventMobileNav;