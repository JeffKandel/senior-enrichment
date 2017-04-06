import axios from 'axios';

const initialState = {
  campuses: [],
  selectedCampus: {}
}

/* -----------------    ACTIONS     ------------------ */

const SET_CAMPUSES = 'SET_CAMPUSES'
const SET_SELECTED_CAMPUS = 'SET_SELECTED_CAMPUS';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
// //Only dispatch these two alongside student.updateStudent action
// const ADD_STUDENT_TO_CAMPUS = 'ADD_STUDENT_TO_CAMPUS';
// const REMOVE_STUDENT_FROM_CAMPUS = 'REMOVE_STUDENT_FROM_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */
export const setCampuses = (campuses) => ({
  type: SET_CAMPUSES,
  campuses: campuses
})

export const setCampus = (campus) => ({
  type: SET_SELECTED_CAMPUS,
  selectedCampus: campus
})

export const createCampus = (campus) => ({
  type: CREATE_CAMPUS,
  campus: campus
})

export const updateCampus = (campus) => ({
  type: UPDATE_CAMPUS,
  campus: campus
})

export const deleteCampus = (campusId) => ({
  type: DELETE_CAMPUS,
  campusId: campusId
})

/* ------------       REDUCERS     ------------------ */

export default function(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_CAMPUSES:
      newState.campuses = action.campuses;
      break;

    case SET_SELECTED_CAMPUS:
      console.log('blerp', action);
      newState.selectedCampus = action.selectedCampus;
      break;

    case CREATE_CAMPUS:
      newState.campuses.concat([action.campus]);
      break;

    case UPDATE_CAMPUS:
      newState.campuses.map((campus) => (
        (campus.id === action.campus.id) ? action.campus : campus
      ))
      break;

    case DELETE_CAMPUS:
      newState.campuses.filter((currentCampus) => (
        (currentCampus.id !== action.campusId)
      ))
      break;

    default:
      return state;

  }

  return newState;

}


/* ------------       DISPATCHERS     ------------------ */

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
    .then(res => dispatch(setCampuses(res.data)))
    .catch(err => console.error(`Fetching campuses unsuccesful`, err));
};

export const fetchCampus = id => dispatch => {
  axios.get(`/api/campuses/${id}`)
    .then(res => dispatch(setCampus(res.data)))
    .catch(err => console.error(`Fetching campus unsuccesful`, err));
};

//
export const removeCampus = id => dispatch => {
  axios.delete(`/api/campuses/${id}`)
    .then(removedBool => {
      if (removedBool) {
        dispatch(deleteCampus(id))
      } else {
        throw new Error('Failed to remove campus');
      }
    })
    .catch(err => console.error(`Removing campus: ${id} unsuccesful`, err));
};

export const addCampus = campus => dispatch => {
  axios.post('/api/campuses', campus)
    .then(res => dispatch(createCampus(res.data)))
    .catch(err => console.error(`Creating campus: ${campus} unsuccesful`, err));
};

export const editCampus = (id, campus) => dispatch => {
  axios.put(`/api/campuses/${id}`, campus)
    .then(res => dispatch(updateCampus(res.data)))
    .catch(err => console.error(`Updating campus: ${campus} unsuccesful`, err));
};
