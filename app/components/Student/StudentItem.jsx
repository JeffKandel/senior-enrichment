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
              onClick={() => props.handleRemove(student.id)}
              >
              <i className="fa fa-times" />
            </button>
          </h4>
      </div>
    </div>
  )
}
