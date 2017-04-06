import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Root from './components/Root';
import StudentList from './components/Student/StudentList.jsx';
import StudentDetail from './components/Student/StudentDetail';
import CampusList from './components/Campus/CampusList';
import CampusDetail from './components/Campus/CampusDetail';
import { fetchCampuses, fetchCampus } from './reducers/campus';
import { fetchStudents, fetchStudent } from './reducers/student';

/* -----------------    COMPONENT     ------------------ */

const Routes = ({ fetchInitialData, onStudentEnter, onCampusEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={fetchInitialData}>
      <IndexRoute component={CampusList} />
      <Route path="students" component={StudentList} />
      <Route path="students/:id" component={StudentDetail} onEnter={onStudentEnter} />
      <Route path="campuses" component={CampusList} />
      <Route path="campuses/:id" component={CampusDetail} onEnter={onCampusEnter} />
      <Route path="*" component={CampusList} />
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
  onStudentEnter: (nextRouterState) => {
    const campusId = nextRouterState.params.id;
    dispatch(fetchCampus(campusId));
  },
  onCampusEnter: (nextRouterState) => {
    const studentId = nextRouterState.params.id;
    dispatch(fetchStudent(studentId));
  }
});

export default connect(mapProps, mapDispatch)(Routes);
