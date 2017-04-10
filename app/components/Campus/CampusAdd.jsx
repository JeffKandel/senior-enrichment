import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../../reducers/campus'
import { browserHistory } from 'react-router'


/* -----------------    COMPONENT     ------------------ */

class CampusAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAdd(this.state);
  }

  render() {
    return (
      <form className="form-horizonal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label
          htmlFor="name"
          className="control-label col-xs-2"
          >Name:</label>
          <div className="col-xs-10">
            <input
            name="name"
            id="name"
            className="form-control"
            type="text"
            placeholder="New Campus"
            value={this.state.name}
            onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label
          htmlFor="image"
          className="control-label col-xs-2"

          >Image URL:</label>
          <div className="col-xs-10">
            <input
            name="image"
            id="image"
            className="form-control"
            type="text"
            placeholder="http://www.placecage.com/200/200"
            value={this.state.image}
            onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-offset-2 col-xs-10">
          <button
          className="btn btn-primary"
          type="submit"
          >
          Submit
          </button>
          </div>
        </div>
      </form>
    );
  }
}


/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({});

const mapDispatch = dispatch => ({
  handleAdd: (campus) => {
    dispatch(addCampus(campus))
      .then((campus) => {
        browserHistory.push(`/campuses/${campus.id}`)
      });
  }
});

export default connect(mapState, mapDispatch)(CampusAdd);
