import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { editStudent } from '../../reducers/student.jsx'
import { addStudentToCampus, removeStudentFromCampus } from '../../reducers/campus.jsx'

class CampusDetail extends React.Component {

  render() {
    const selectedCampus = this.props.campus.selectedCampus;
    if (!selectedCampus) return <div />

    return (
      <div className="container">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h2 className="panel-title">
              <span>Students at {selectedCampus.name}</span>
              <button
              className="btn btn-primary btn-xs pull-right"
              onClick = { () => {this.props.addStudentToCampus(this.props.student.students[2], selectedCampus.id)}}
              ><i className="fa fa-plus"></i></button>
            </h2>
          </div>
          <ul className="list-group">
            {
              selectedCampus.students && selectedCampus.students
              .map(student => (<div key = {student.id} className="list-group-item min-content user-item">
                <div className="media">
                  <div className="media-left media-middle icon-container">
                    <img className="media-object img-circle" src={student.image} />
                  </div>
                    <h4 className="media-heading tucked">
                      <span placeholder="Jean Doe">{student.name}</span>
                      <button
                        value={student.id}
                        className="btn btn-warning btn-xs pull-right"
                        onClick={() => {this.props.removeStudentFromCampus(student)}}
                      >
                        <i className="fa fa-times" />
                      </button>
                    </h4>
                  <div className="media-right media-middle">
                  </div>
                </div>
              </div>))
            }
          </ul>
        </div>
      </div>
    )
  }
}
const mapProps = ({ campus, student }) => ({ campus, student });

const mapDispatch = (dispatch) => {
  return {
    removeStudentFromCampus(student) {
      const updatedStudent = Object.assign({}, student, { campusId: null })
      dispatch(removeStudentFromCampus(updatedStudent));
      dispatch(editStudent(updatedStudent.id, updatedStudent));
    },
    addStudentToCampus(student, campusId) {
      console.log('tast',student);
      const updatedStudent = Object.assign({}, student, { campusId: campusId })
      dispatch(addStudentToCampus(student));
      dispatch(editStudent(updatedStudent.id, updatedStudent));

    }
  };
};
export default connect(mapProps, mapDispatch)(CampusDetail);
