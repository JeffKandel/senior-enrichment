import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { editStudent } from '../../reducers/student.jsx'
import { addStudentToCampus, removeStudentFromCampus } from '../../reducers/campus.jsx'

export default function(props) {
    const {campus} = props
    return (
      <div className="list-group-item min-content user-item">
        <div className="media">
          <h4 className="media-heading tucked">
            <Link to={`/campuses/${campus.id}`}>
              <span placeholder="Jean Doe">{campus.name}</span>
            </Link>
            <button
            value={campus.id}
            className="btn btn-warning btn-xs pull-right"
            onClick={() => props.handleRemove(campus.id)}
            >
            <i className="fa fa-times" />
            </button>
          </h4>
        </div>
      </div>
    )
}
