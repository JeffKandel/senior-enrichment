import { combineReducers } from 'redux'
import students from './student.jsx'
import campuses from './campus.jsx'

export default combineReducers({ students, campuses });

export const selectCampusStudents = (state) => {
  const campusStudentIds = state.campus.selectedCampus.students;
  return state.student.students.filter((student) => (campusStudentIds.includes(student.id)))
}
