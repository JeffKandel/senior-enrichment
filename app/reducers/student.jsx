import axios from 'axios';

const initialState = {
  students: [],
  selectedStudent: {}
}

/* ----------------    ACTIONS TYPES    ------------------ */

const SET_STUDENTS = 'SET_STUDENTS'
const SET_SELECTED_STUDENT = 'SET_SELECTED_STUDENT';
const CREATE_STUDENT = 'CREATE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

export const setStudents = (students) => ({
  type: SET_STUDENTS,
  students: students
})

export const setStudent = (student) => ({
  type: SET_SELECTED_STUDENT,
  student: student
})

export const createStudent = (student) => ({
  type: CREATE_STUDENT,
  student: student
})

export const updateStudent = (student) => ({
  type: UPDATE_STUDENT,
  student: student
})

export const deleteStudent = (studentId) => ({
  type: DELETE_STUDENT,
  studentId: studentId
})


/* ------------       REDUCERS     ------------------ */

export default function(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_STUDENTS:
      newState.students = action.students;
      break;

    case SET_SELECTED_STUDENT:
      newState.student = action.student;
      break;

    case CREATE_STUDENT:
      newState.students.concat([action.student]);
      break;

    case UPDATE_STUDENT:
      newState.students.map((student) => (
        (student.id === action.student.id) ? action.student : student
      ))
      break;

    case DELETE_STUDENT:
      newState.students.filter((currentStudent) => (
        (currentStudent.id !== action.studentId)
      ))
      break;

    default:
      return state;

  }

  return newState;

}

/* ------------       DISPATCHERS     ------------------ */

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
    .then(res => dispatch(setStudents(res.data)))
    .catch(err => console.error(`Fetching students unsuccesful`, err));

};

export const fetchStudent = id => dispatch => {
  axios.get(`/api/students/${id}`)
    .then(res => dispatch(setStudent(res.data)))
    .catch(err => console.error(`Fetching campus unsuccesful`, err));
};

//
export const removeStudent = id => dispatch => {
  axios.delete(`/api/students/${id}`)
    .then(removedBool => {
      if (removedBool) {
        dispatch(deleteStudent(id))
      } else {
        throw new Error('Failed to remove student');
      }
    })
    .catch(err => console.error(`Removing student: ${id} unsuccesful`, err));
};

export const addStudent = student => dispatch => {
  axios.post('/api/students', student)
    .then(res => dispatch(createStudent(res.data)))
    .catch(err => console.error(`Creating student: ${student} unsuccesful`, err));
};

export const editStudent = (id, student) => dispatch => {
  axios.put(`/api/students/${id}`, student)
    .then(res => dispatch(updateStudent(res.data)))
    .catch(err => console.error(`Updating student: ${student} unsuccesful`, err));
};
