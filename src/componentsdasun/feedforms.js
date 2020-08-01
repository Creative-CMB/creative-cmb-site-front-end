import React, { Component } from 'react';
import feeddetails from './feeddetails';

export class feedforms extends Component {
   
   state = {
       step: 1,
       firstname: '',
       lastname: '',
       email: '',
        message: ''
   }
    nextStep = () => {
        const {step} = this.state;
        this.setState({
        step: step + 1
        });
    }
    preStep = () => {
        const {step} = this.state;
        this.setState({
        step: step - 1
        });
    }
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

   
    render() {
        const { step } = this.state;
        const {firstname,lastname,email,message} = this.state;
        const values = {firstname,lastname,email,message}

        switch(step) {
            case 1:
                return (
                    <feeddetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
                case 2:
                    return<h1>confirm</h1>

                case 3:
                    return<h1>sucess</h1>
        }

        return (
            <div>

            </div>
        )
    }
}
export default feedforms

