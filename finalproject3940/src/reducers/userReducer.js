export const initialState = [];


export default function userReducer(state = initialState, action) {
 //console.log(action);
  switch (action.type) {
    case 'GET_USER':
      return state;
    case 'ADD_USER':
      return [
        ...state,
        action.payload
      ];

    default:
      return state;
  }
}