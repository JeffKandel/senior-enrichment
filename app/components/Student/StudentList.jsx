import React from 'react'
import { connect } from 'react-redux'

class test extends React.Component {

 render(){
    return (
      <div className="container">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h2 className="panel-title large-font">
            <span>Students</span>
            <i className="fa fa-plus pull-right" aria-hidden="true"></i>
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
                  <Link
                    className="media-body"
                    activeClassName="active"
                    to={`/students/${student.id}`}>
                    <h4 className="media-heading tucked">
                      <span placeholder="Jean Doe">{student.name}</span>
                      <i className="fa fa-times pull-right" aria-hidden="true"></i>
                    </h4>
                  </Link>
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

const mapProps = null;

const mapDispatch = null;

export default connect(mapProps, mapDispatch)(test);
