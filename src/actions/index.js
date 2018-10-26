import types from './actionTypes';


export const selectRoom = roomNumber => dispatch => {
  return dispatch({
    type: types.SELECT_ROOM,
    roomNumber
  })
};

export const deselectRoom = roomNumber => dispatch => {
  return dispatch({
    type: types.DESELECT_ROOM,
    roomNumber
  })
};