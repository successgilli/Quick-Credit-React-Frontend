import actions from '../actions/actions.js';

export const isLoggedIn = (state= 'false', action) =>{
    switch(action.type){
        case actions.CHANGE_LOGIN:
            return 'true';
        case actions.REMOVE_LOGIN:
            return 'false';
        default:
            return state;
    }
}

export const user = (state = {}, action) => {
    switch(action.type){
        case actions.LOGIN_USER || actions.SIGN_USER:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export const error = (state = {}, action) => {
    switch(action.type){
        case actions.LOGIN_ERROR:
            return {
                ...state,
                loginerror: action.message
            };
        case actions.CLEAR_LOGIN_ERROR:
            return {
                ...state,
                loginerror: ''
            };
        case actions.SIGNUP_ERROR:
                return {
                    ...state,
                    signinerror: action.message
                };
        case actions.CLEAR_SIGNIN_ERROR:
            return {
                ...state,
                signinerror: ''
            };
        default:
            return state;
    }
};



// state 
// {
//     isLoggedIn: 'false',
//     user: {
//         id: ''
//         firstName: '',
//         lastName: ''
//     },
//    errors: {
//        loginerror:
//        signinerror:
//    }
    
// }