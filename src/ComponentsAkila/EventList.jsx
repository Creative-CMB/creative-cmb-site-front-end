import React, { Component } from 'react';
import EventListItem from './EventListItem';
import PropTypes from 'prop-types';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return this.props.items.map((item) => (
        <EventListItem key={item.id} item={item} dlt={this.props.dlt}/>
    ));
  }
}


 
export default EventList;