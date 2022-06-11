import { GET_USER, ADD_USER } from '../action/userActions';

export const initialState = {
  users: [],
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: action.payload,
      };

      case ADD_USER:
        return {
          ...state,
          users: [...state.users, action.payload],
        };
        
        default:
          return state;
  }
}