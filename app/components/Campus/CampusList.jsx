import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import CampusDetail from './CampusDetail';

/* -----------------    COMPONENT     ------------------ */

class CampusList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const campuses = this.props.campus.campuses
    return (
      <div className="container">
        <div className="user-list">
        {
          campuses
            .map(campus => (
              <div key = {campus.id} className="list-group-item min-content user-item">
                <div className="media">
                  <div className="media-left media-middle icon-container">
                    <img className="media-object img-circle" src={campus.image} />
                  </div>
                  <Link
                    className="media-body"
                    activeClassName="active"
                    to={`/campuses/${campus.id}`}>
                    <h4 className="media-heading tucked">
                      <span placeholder="Jean Doe">{campus.name}</span>
                    </h4>
                    <h5 className="tucked">
                      <span>{campus.email}</span>
                    </h5>
                    <h5 className="tucked">
                      <span>{campus.phone}</span>
                    </h5>
                  </Link>
                  <div className="media-right media-middle">
                  </div>
                </div>
              </div>)
            )
        }
        </div>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campus }) => ({ campus });

const mapDispatch = { };

export default connect(mapState, mapDispatch)(CampusList);

