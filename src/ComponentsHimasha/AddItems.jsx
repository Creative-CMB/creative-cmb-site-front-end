import React, { Component } from 'react';

export default class AddItems extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                name:'',
                model:'',
                Price:'',
                quantity:'',
                condition:false,
                availability:false
             }
        }

        formData = (event) => {
            this.setState({
                [event.target.name]: event.target.value
                
            })

            this.setState({
                condition: !this.state.condition
            })

            console.log(this.state.name, this.state.model, this.state.condition)
        }
       
    render() {
        return (
            <div>
                <form>
                    Item Name : <input type="text" onChange= {this.formData} name="name"></input><br></br>
                    Model : <input type="text" onChange= {this.formData} name="model" ></input><br></br>
                    Price : <input type="text" onChange= {this.formData} name="price"></input><br></br>
                    Quantity : <input type="text" onChange= {this.formData} name="quantity"></input><br></br>
                    Condition (New/Used) : <input type="checkbox" checked={this.state.condition} onChange= {this.formData} name="condition"></input><br></br>
                    Availability : <input type="checkbox" onChange= {this.formData} name="availability"></input><br></br>
                    Image: <input type="file"></input>
                    
                </form>
            </div>
        )
    }
}
