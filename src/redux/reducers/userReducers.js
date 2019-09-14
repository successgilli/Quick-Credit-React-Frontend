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
        case actions.UPDATE_PROFILE_PICTURE:
            console.log('hit')
            return {
                ...action.payload
            };
        default:

            console.log('here! ', action)
            return state;
    }
};

export const modal = (state = { show: true }, action) => {
    switch(action.type){
        case actions.CALL_MODAL:
            return action.payload;
        default:
            return state;
    }
}

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
                loginerror: '',
                invalidToken: ''
            };
        case actions.SIGNUP_ERROR:
                return {
                    ...state,
                    signinerror: action.message
                };
        case actions.CLEAR_SIGNIN_ERROR:
            return {
                ...state,
                signinerror: '',
                invalidToken: ''
            };
        case actions.INVALID_TOKEN:
            return {
                ...state,
                invalidToken: 'bad or no token'
            }
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