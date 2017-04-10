import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import CampusItem from './CampusItem'
import { removeCampus } from '../../reducers/campus'

/* -----------------    COMPONENT     ------------------ */

class CampusList extends Component {
  render() {
    return (
      <div className="container">
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h2 className="panel-title large-font">
          <span>All Campuses</span>
          <Link to={`/campuses/add`}>
            <i className="fa fa-plus pull-right" aria-hidden="true" />
          </Link>
          </h2>
        </div>
        <div className="user-list">
          <ul className="list-group">
            {this.props.campuses.currentCampuses.map((campus) => (<CampusItem handleRemove={this.props.handleRemove} key={campus.id} campus={campus} />))}
          </ul>
        </div>
      </div>
    </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses }) => ({ campuses });

const mapDispatch = dispatch => ({
  handleRemove: (campusId) => {
    dispatch(removeCampus(campusId))
  },
});

export default connect(mapState, mapDispatch)(CampusList);
