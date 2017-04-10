import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../../reducers/student'
import { browserHistory } from 'react-router'


/* -----------------    COMPONENT     ------------------ */

class StudentAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      campus: ''
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
            placeholder="New Student"
            value={this.state.name}
            onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label
          htmlFor="email"
          className="control-label col-xs-2"

          >Email:</label>
          <div className="col-xs-10">
            <input
            name="email"
            id="email"
            className="form-control"
            type="text"
            placeholder="test@gmail.com"
            value={this.state.email}
            onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label
          htmlFor="campus"
          className="control-label col-xs-2"

          >Student Campus:</label>
          <div className="col-xs-10">
            <select
            value={this.state.campus}
            name="campus"
            onChange={this.handleInputChange}
            >
              {this.props.campuses.currentCampuses.map((opt)=>(<option key={opt.id} value={opt.id}>{opt.name}</option>))}
            </select>
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

const mapState = ({campuses}) => ({campuses});

const mapDispatch = dispatch => ({
  handleAdd: (newStudent) => {
      console.log("newStudent", newStudent);
    dispatch(addStudent(newStudent))
      .then((student) => {
        browserHistory.push(`/students/${student.id}`)
      });
  }
});

export default connect(mapState, mapDispatch)(StudentAdd);
