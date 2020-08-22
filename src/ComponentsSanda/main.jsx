import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Test extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>

        <Link to="/edit">
          <button>Press</button>
        </Link>
      </div>
    );
  }
}

export default Test;
