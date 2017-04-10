import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';
import StudentItem from './StudentItem'
import { removeStudent } from '../../reducers/student'

class StudentList extends React.Component {
  render() {
      return (
        <div className="container">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h2 className="panel-title large-font">
                <span>All Students</span>
                <Link to={`/students/add`}>
                  <i className="fa fa-plus pull-right" aria-hidden="true" />
                </Link>
                </h2>
              </div>
              <div className="user-list">
                <ul className="list-group">
                  {this.props.students.currentStudents.map((student) => (<StudentItem handleRemove={this.props.handleRemove} key={student.id} student={student} />))}
                </ul>
              </div>
            </div>
          </div>);


  }
}

const mapState = ({ students, campuses }) => ({ students, campuses });

const mapDispatch = dispatch => ({
  handleRemove: (studentId) => {
    dispatch(removeStudent(studentId))
  },
});

export default connect(mapState, mapDispatch)(StudentList);
