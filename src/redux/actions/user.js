import fetch from 'isomorphic-fetch';

export const signinUser = (data) => async dispatch => {
    console.log(data);
    const req = new Request( 'https://quickcreditgilli.herokuapp.com/api/v1/auth/signin', {
        method: 'POST',
        headers: new Headers({ 'Content-type': 'application/json' }),
        body: JSON.stringify(data),
        });
    const request = await fetch(req)
    .then(res => res.json());
    if (request.status === 400){
       dispatch({type: 'LOGIN_ERROR', message: request.error});
       dispatch({type: 'REMOVE_LOGIN'});
       return 'error';
    }
    console.log(request);
    dispatch({type: 'CHANGE_LOGIN'});
    dispatch({type: 'CLEAR_LOGIN_ERROR'});
    const { token, ...userData} = request.data;
    localStorage.setItem('auth', token);
    dispatch({type: 'LOGIN_USER', payload: userData});
    return;
}

export const signuser = (credentials) => async dispatch => {
    console.log(credentials);
    const req = new Request( 'https://quickcreditgilli.herokuapp.com/api/v1/auth/signup', {
        method: 'POST',
        headers: new Headers({ 'Content-type': 'application/json' }),
        body: JSON.stringify(credentials),
        });
    const request = await fetch(req)
    .then(res => res.json());
    console.log(request);
    if (request.status === 400 || request.status === 409){
        // dispatch({type: 'LOGIN_ERROR', message: request.error});
        dispatch({type: 'SIGNUP_ERROR', message: request.error});
        return 'error';
    }
    dispatch({type: 'CHANGE_LOGIN'});
    dispatch({type: 'CLEAR_SIGNIN_ERROR'});
    const { token, ...userData} = request.data;
    localStorage.setItem('auth', token);
    dispatch({type: 'LOGIN_USER', payload: userData});
    return;

}