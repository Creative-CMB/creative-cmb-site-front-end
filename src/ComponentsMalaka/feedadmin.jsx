import React, { Component } from 'react';
import EventNav from '../ComponentsAkila/EventNav'
import './feedadmin.css';

class feedadmin extends Component {
  render() {
    return (
      <div>
        <EventNav></EventNav>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Reply</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>
      <button type="button" class="btn btn-warning">Replay</button>
      </td>
      <td>
      <button type="button" class="btn btn-primary">Edit</button>
      </td>
      <td>
      <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">Delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>
      <button type="button" class="btn btn-warning">Replay</button>
      </td>
      <td>
      <button type="button" class="btn btn-primary">Edit</button>
      </td>
      <td>
      <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">Delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>
      <button type="button" class="btn btn-warning">Replay</button>
      </td>
      <td>
      <button type="button" class="btn btn-primary">Edit</button>
      </td>
      <td>
      <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">Delete</button>
      </td>
    </tr>
  </tbody>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Alert</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Delete Successfull
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
}

export default feedadmin;