import React, { Component } from 'react'

class EventAddItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: {
        itemName: ["akila", "pramoe"],
        count: [],
      },
    };
  }

  change = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmitForm = (e) => {
        e.preventDefault();
        //alert('akila')
        this.props.addItem(this.state.listItem);
        this.setState({ listItem:''});
  }

    render() {
      
        const itemnames = ["akila", "pramoe"];

    return (
      <form onSubmit={this.onSubmitForm} className="select-item">
        <div className="row">
          <div className="col-lg-2">
            <p>Select the Item</p>
          </div>
          <div className="col-lg-6">
            <select name="itemName" id="" onChange={this.change}>
              {this.state.listItem.itemName.map((name) => (
                <option value={name} name="" id="">
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-lg-2">
            <select name="count" id="" onChange={this.change}>
              <option value={this.state.listItem.count} name="" id="">
                {this.state.listItem.count}
              </option>
            </select>
          </div>
          <div className="col-lg-2">
            <button
              type="submit"
              className="btn btn-danger"
              style={{ color: "white" }}
            >
              Add Item
            </button>
          </div>
        </div>

        <hr />
      </form>
    );
  }
}
 
export default EventAddItems;