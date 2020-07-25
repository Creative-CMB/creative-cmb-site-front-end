import React, { Component } from 'react';
import * as EmailValidator from "email-validator";

class EventSentEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        class: 'btn btn-danger',
        btnVal:'Error'
    };
  }

  enterEmail = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.submitEmail();
    });
      
       if (EmailValidator.validate(this.state.email)) {
         this.setState({ class: "btn btn-success", btnVal: "Submit" });
         //this.props.submitEmail(this.state.email);
       } else {
         this.setState({ class: "btn btn-danger", btnVal: "Error" });
       }
  };

  submitEmail = () => {
      //console.log(this.state.email);
     
      if (EmailValidator.validate(this.state.email)) {
          this.setState({ class: "btn btn-success", btnVal: "Submit" });
            this.props.submitEmail(this.state.email);
      }
      else {
          this.setState({ class: "btn btn-danger", btnVal: "Error" });
      }
    };
    
    validate = () => {
        if (this.state.btnVal == 'Submit') {
             this.props.submitEmail(this.state.email);
        }
        else {
            alert('The email address you have enterd is no a valid email address.');
        }
    }
  render() {
    return (
      <div className="file">
        <div className="light-sub-topic">
          <p>
            ENTER THE EVENT CODINATOR'S EMAIL ADDRESSES TO SEND PROGRESS OF THIS
            ENET
          </p>
        </div>
        <div className="event-card form-card email">
            <div className="row item">
              <div className="col-lg-9 email-div">
                <input
                  type="text"
                  name="email"
                  id=""
                  placeholder="Email Address"
                onInput={this.enterEmail.bind(this)}
                onBlur={this.validate}
                />
              </div>
              <div className="col-lg-1">
                <a
                  className={this.state.class}
                  onClick={this.submitEmail}
                  style={{ color: "white" }}
                >
                  {this.state.btnVal}
                </a>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
 
export default EventSentEmail;