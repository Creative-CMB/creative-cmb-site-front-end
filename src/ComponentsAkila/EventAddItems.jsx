import React, { Component } from 'react'

class EventAddItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
        itemName: "",
        count: "",
    };
  }

  change = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmitForm = (e) => {
        e.preventDefault();
      //console.log(this.state.itemName);
      const listItem = { itemName: this.state.itemName, count: this.state.count };
        this.props.addItem(listItem);
        this.setState({ listItem:'',count:''});
  }

    render() {
      
      const itemnames = ["Item1", "item2", "Item3", "item4", "Item5", "item6"];
      const counts = ["1", "2", "3", "4", "5", "6"];

    return (
      <form onSubmit={this.onSubmitForm} className="select-item">
        <div className="row">
          <div className="col-lg-2">
            <p>Select the Item</p>
          </div>
          <div className="col-lg-6">
            <select name="itemName" id="" onChange={this.change}>
              {itemnames.map((name) => (
                <option value={name} name="" id="">
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-lg-2">
            <select name="count" id="" onChange={this.change}>
              {counts.map((itm) => (
                <option value={itm} name="" id="">
                  {itm}
                </option>
              ))}
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