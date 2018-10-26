import types from '../actions/actionTypes';

const initialState = {
  rooms: {
    1: false,
    2: false,
    3: false,
    4: false,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_ROOM:
      return {
        ...state,
        rooms: Object.keys(state.rooms).filter(roomNumber => {
          return roomNumber < action.roomNumber
        }),
      };
    default:
      return state
  }
}