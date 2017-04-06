import { combineReducers } from 'redux'
import student from './student.jsx'
import campus from './campus.jsx'

export default combineReducers({ student, campus });

export const selectCampusStudents = function(state){
  const campusStudentIds = state.campus.selectedCampus.campusStudentIds;
  return state.student.students.filter((student) => (campusStudentIds.includes(student.id)))
}
