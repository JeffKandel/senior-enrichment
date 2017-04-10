import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { editStudent } from '../../reducers/student.jsx'
import { addStudentToCampus, removeStudentFromCampus } from '../../reducers/campus.jsx'

export default function(props) {
  const {student} = props
  return (
    <div className="list-group-item min-content user-item">
      <div className="media">
          <h4 className="media-heading tucked">
            <Link to={`/students/${student.id}`}>{student.name}</Link>
            <button
              value={student.id}
              className="btn btn-warning btn-xs pull-right"
            >
              <i className="fa fa-times" />
            </button>
          </h4>
      </div>
    </div>
  )
}
// const mapProps = ({ campus, student }) => ({ campus, student });

// const mapDispatch = (dispatch) => {
//   return {
//     removeStudentFromCampus(student) {
//       const updatedStudent = Object.assign({}, student, { campusId: null })
//       dispatch(removeStudentFromCampus(updatedStudent));
//       dispatch(editStudent(updatedStudent.id, updatedStudent));
//     },
//     addStudentToCampus(student, campusId) {
//       console.log('tast',student);
//       const updatedStudent = Object.assign({}, student, { campusId: campusId })
//       dispatch(addStudentToCampus(student));
//       dispatch(editStudent(updatedStudent.id, updatedStudent));

//     }
//   };
// };
// export default connect(mapProps, mapDispatch)(Item);

// <div className="panel panel-warning">
//           <div className="panel-heading">
//             <h2 className="panel-title">
//               <span>Students at {selectedCampus.name}</span>
//               <button
//               className="btn btn-primary btn-xs pull-right"
//               onClick = { () => {this.props.addStudentToCampus(this.props.student.students[2], selectedCampus.id)}}
//               ><i className="fa fa-plus"></i></button>
//             </h2>
//           </div>
//           <ul className="list-group">
//             {
//               selectedCampus.students && selectedCampus.students
//               .map(student => (<div key = {student.id} className="list-group-item min-content user-item">
                        // onClick={() => {this.props.removeprops.studentFromCampus(props.student)}}

//               </div>))
//             }
//           </ul>
//         </div>
