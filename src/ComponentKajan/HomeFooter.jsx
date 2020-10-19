import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';



class Footers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            
            <footer style={{backgroundColor:"#007bff"}} className="page-footer font-small stylish-color-dark pt-4">

            <div class="container text-center text-md-left">
            <div class="row">
            <div class="col-md-4 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
        <p style={{color:"black"}} > We are "ONE STOP SHOP" for your event.
Young Dynamic & Professional Team with Creative & new Innovative Ideas to unique your event from others....
Let us Know Your Requirement....
We can make it fit for your Budget... Less


          </p>
            </div>
            <hr class="clearfix w-100 d-md-none"></hr>
            <div class="col-md-2 mx-auto">


</div>
<hr class="clearfix w-100 d-md-none"></hr>

<div class="col-md-2 mx-auto">

  <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Quick Access</h5>

  <ul class="list-unstyled">
    <li>
      <Link to ="/create"style={{color:"black"}}>Events</Link>
    </li>
    <li>
    <Link to ="/create"style={{color:"black"}}>Marketing</Link>

    </li>
    <li>
    <Link to ="/create"style={{color:"black"}}>Ticket</Link>

    </li>
    <li>
    <Link to ="/create"style={{color:"black"}}>Rentals</Link>

    </li>
  </ul>

</div>

<hr class="clearfix w-100 d-md-none"></hr>

<div class="col-md-2 mx-auto">

  <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Contact Us</h5>

  <ul class="list-unstyled">
    <li>
    <h6>No7,
      Hampton Road,Colombo-6</h6>
    </li>
    <li>
    <h6>Contact No:- +947787657482</h6>
    </li>
    <li>
    <h6>Email:- cmb@gmail.com</h6>    </li>
    
  </ul>

</div>



            </div>
            </div>
            <hr></hr>

  <ul class="list-unstyled list-inline text-center py-2">
    <li class="list-inline-item">
      <h5 class="mb-1">Register for free</h5>
    </li>
    <li class="list-inline-item">
      <Link to="/signup" class="btn btn-danger btn-rounded">Sign up!</Link>
    </li>
  </ul>

  <hr></hr>

  <ul class="list-unstyled list-inline text-center">
    <li class="list-inline-item">
      <a style={{color:"black"}} class="btn-floating btn-fb mx-1">
        <i class="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a style={{color:"black"}} class="btn-floating btn-tw mx-1">
        <i class="fab fa-twitter"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a style={{color:"black"}} class="btn-floating btn-gplus mx-1">
        <i class="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a style={{color:"black"}} class="btn-floating btn-li mx-1">
        <i class="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a style={{color:"black"}} class="btn-floating btn-dribbble mx-1">
        <i class="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>

  <div  class="footer-copyright text-center py-3">© 2020 Copyright:
    <a style={{color:"black"}} href="https://mdbootstrap.com/"> www.CreativeCMB.com</a>
  </div>
            </footer>
            </>
         );
    }
}
 
export default Footers;