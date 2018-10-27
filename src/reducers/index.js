import types from '../actions/actionTypes';

const initialState = {
  rooms: {
    1: {
      selected: true,
      adults: "1",
      children: "0",
    },
    2: {
      selected: false,
      adults: "1",
      children: "0",
    },
    3: {
      selected: false,
      adults: "1",
      children: "0",
    },
    4: {
      selected: false,
      adults: "1",
      children: "0",
    },
  },
  saved: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_ROOM:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [action.roomNumber]: {
            ...state.rooms[action.roomNumber],
            selected: true,
          }
        }
      };
    case types.DESELECT_ROOM:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [action.roomNumber]: {
            ...initialState.rooms[action.roomNumber],
            selected: false
          }
        }
      };
    case types.UPDATE_OCCUPANTS:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [action.roomNumber]: {
            ...state.rooms[action.roomNumber],
            [action.occupantType]: action.quantity,
          }
        }
      }
      case types.LOAD_STATE:
        return {
          ...action.savedState,
          saved: false,
        }
      case types.SAVE_STATE:
        return {
          ...state,
          saved: true,
        }
    default:
      return state
  }
}