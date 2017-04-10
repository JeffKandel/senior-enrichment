import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Root from './components/Root';
import StudentList from './components/Student/StudentList';
import StudentAdd from './components/Student/StudentAdd'
import StudentDetail from './components/Student/StudentDetail'
import CampusList from './components/Campus/CampusList';
import CampusAdd from './components/Campus/CampusAdd'
import CampusDetail from './components/Campus/CampusDetail';
import { fetchCampuses, fetchCampus } from './reducers/campus';
import { fetchStudents, fetchStudent } from './reducers/student';

/* -----------------    COMPONENT     ------------------ */

const Routes = ({ fetchInitialData, onCampusEnter, onStudentEnter, clearURL }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} >
      <IndexRoute component={CampusList} onEnter={fetchInitialData} />
      <Route path="students" component={StudentList} onEnter={fetchInitialData}/>
      <Route path="students/add" component={StudentAdd} onEnter={fetchInitialData} />
      <Route path="students/:id" component={StudentDetail} onEnter={onStudentEnter} />
      <Route path="campuses" component={CampusList} onEnter={fetchInitialData} />
      <Route path="campuses/add" component={CampusAdd} />
      <Route path="campuses/:id" component={CampusDetail} onEnter={onCampusEnter} />
      <Route path="*" component={CampusList} onEnter={clearURL}/>
    </Route>
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  },
  //Could by more DRY
  //But I choose to keep separate in case more logic is needed
  onCampusEnter: (nextRouterState) => {
    const campusId = nextRouterState.params.id;
    dispatch(fetchCampus(campusId));
  },
  onStudentEnter: (nextRouterState) => {
    const studentId = nextRouterState.params.id;
    dispatch(fetchStudent(studentId));
  },
  clearURL: (nextRouterState, replace) => {
    replace('/')
  }
});

export default connect(mapProps, mapDispatch)(Routes);
