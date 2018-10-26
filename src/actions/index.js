import types from './actionTypes';


export const selectRoom = roomNumber => dispatch => {
  return dispatch({
    type: types.SELECT_ROOM,
    roomNumber
  });
};

export const deselectRoom = roomNumber => dispatch => {
  return dispatch({
    type: types.DESELECT_ROOM,
    roomNumber
  });
};

export const updateOccupants = (roomNumber, occupantType, quantity) => dispatch => {
  return dispatch({
    type: types.UPDATE_OCCUPANTS,
    roomNumber,
    occupantType,
    quantity,
  });
};

export const loadState = savedState => dispatch => {
  const savedState = JSON.parse(localStorage.getItem('savedState'));
  if (savedState) {
    return dispatch({
      type: types.LOAD_STATE,
      savedState
    })
  }
}

export const saveState = state => dispatch => {
  localStorage.setItem('savedState', JSON.stringify(state));
  return dispatch({
    type: types.SAVE_STATE,
  })
}