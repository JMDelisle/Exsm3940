export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';

export const fetchUser = () => async (dispatch) => {
let users = '';
    dispatch({
        type: GET_USER,
        payload: users,
    });
};

export const addUser = (newUser) => async (dispatch) => {
    dispatch({
        type: ADD_USER,
        payload: newUser,
    });
};