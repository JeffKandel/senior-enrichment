import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import List from '../List'

/* -----------------    COMPONENT     ------------------ */

class CampusDetail extends Component {
  render() {
    return (
      <div>
      detail
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses }) => ({ campuses });

const mapDispatch = {};

export default connect(mapState, mapDispatch)(CampusDetail);

// <div className="container">
//   <div className="panel panel-warning">
//     <div className="panel-heading">
//       <h2 className="panel-title large-font">
//       <span>Campuses</span>
//       <i className="fa fa-plus pull-right" aria-hidden="true"></i>
//       </h2>
//     </div>
//   </div>
//   <div className="user-list">
//   {
//     campuses
//       .map(campus => (
//         <div key = {campus.id} className="list-group-item min-content user-item">
//           <div className="media">
//             <div className="media-left media-middle icon-container">
//               <img className="media-object img-circle" src={campus.image} />
//             </div>
//             <Link
//               className="media-body"
//               activeClassName="active"
//               to={`/campuses/${campus.id}`}>
//               <h4 className="media-heading tucked">
//                 <span placeholder="Jean Doe">{campus.name}</span>
//               </h4>
//             </Link>
//             <div className="media-right media-middle">
//             </div>
//           </div>
//         </div>)
//       )
//   }
//   </div>
// </div>
