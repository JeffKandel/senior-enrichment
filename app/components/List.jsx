import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

export default
const List = functon({children}) {

  return (
    <div className="container">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h2 className="panel-title large-font">
            <span>this.props.listType</span>
            <i className="fa fa-plus pull-right" aria-hidden="true"></i>
            </h2>
          </div>
        </div>
        <div className="user-list">
          {children}
        </div>
      </div>
  );
}
