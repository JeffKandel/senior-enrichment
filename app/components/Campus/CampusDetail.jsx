import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

class CampusDetail extends Component {
  render() {
    return (
      <div>
        Coming Soon... Campus Details
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses }) => ({ campuses });

const mapDispatch = {};

export default connect(mapState, mapDispatch)(CampusDetail);
