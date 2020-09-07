import React, {  Component } from "react" ;
import recs from './images/iphone-11-pro-select-2019-family.jpg';
import './Feedback.scss';
import RatingBar from './Ratingbar.jsx';
import EventNav from '../ComponentsAkila/EventNav'
import Sidebar from '../ComponentsAkila/EventSideNav'

class FeedbackTemp extends Component {
    state = {
      
    }
    style = {
        fontSize: 40,
        fontWeight: "bold"
    };
    render() {
        return (
            <div>
                <EventNav></EventNav>
                
               <div class="container">
                    <div class="row">
                        <div class="col-sm">
                        
                        </div>
                        <div class="col-sm">
                            <h2>Sertvice Obtained</h2>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select your Service
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Actionsss</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <h2>Satisfaction</h2>
                            <RatingBar></RatingBar>
                            <h2>Leave your Feedback</h2>
                            <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">With textarea</span>
                            </div>
                            <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div>
                            <br></br>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Submit</button>

                        </div>
                        <div class="col-sm">
                        
                        </div>
                    </div>
                    </div>
            </div>
            
        );
        
        
    }
}
export default FeedbackTemp;