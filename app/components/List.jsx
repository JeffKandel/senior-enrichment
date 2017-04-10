import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import CampusItem from './Campus/CampusItem'
import StudentItem from './Student/StudentItem'

/* -----------------    COMPONENT     ------------------ */

export default function(props) {
  const listType = (props.listType);

  const itemType = (listType) => {
    //Used switch to improve legibility of the returned functions
    switch (listType) {
      case 'student':
        return props.students.map((student) => (<StudentItem key={student.id} student={student} />));
      case 'campus':
        return props.campuses.map((campus) => (<CampusItem key={campus.id} campus={campus} />))
    }
  }

  return (
    <div className="container">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h2 className="panel-title large-font">
            <span>{props.listText}</span>
            <i className="fa fa-plus pull-right" aria-hidden="true"></i>
            </h2>
          </div>
          <div className="user-list">
            <ul className="list-group">
              {(itemType(listType))}
            </ul>
          </div>
        </div>
      </div>
  );

}
