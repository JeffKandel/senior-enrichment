import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import axios from 'axios'

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/"><i className="fa fa-globe fa-lg"></i></Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/campuses" activeClassName="active">Campuses</Link>
              </li>
              <li>
                <Link to="/students" activeClassName="active">Students</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = null

export default connect(mapProps, mapDispatch)(Navbar);
