import React, { Component } from 'react'
import dash_image from './Images/illustration.png'
import NavBar from './NavBar'

export default class test extends Component {
    render() {
        return (
            <div> <NavBar />
            <div className="row">
              

                <div className="col-3" style={{background:"#89a7b1"}}>
                <p style={{color:"#ffff" , fontFamily:"Comic Sans MS", fontStyle:"italic", marginTop:"122%", marginLeft:"20%"}} >
                    ...The number of lines in a paragraph depends on the size of the browser window. 
                    If you resize the browser window, the number of lines in this paragraph will change.
                    The number of lines in a paragraph depends on the size of the browser window. 
                    If you resize the browser window, the number of lines in this paragraph will change...
                    </p>

                
                </div>
                <div className="col-4" > </div>
                <div className="col-5">
                   
                        <img  src={dash_image} style={{marginLeft:"5%", marginTop:"10%"}} />
                        
                </div>
                </div>
            </div>
        )
    }
}
