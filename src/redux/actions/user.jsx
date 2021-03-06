import fetch from 'isomorphic-fetch';


export const signinUser = (data) => async dispatch => {
    dispatch({type: 'LOADING'});
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
    dispatch({type: 'CHANGE_LOGIN'});
    dispatch({type: 'CLEAR_LOGIN_ERROR'});
    const { token, ...userData} = request.data;
    localStorage.setItem('auth', token);
    dispatch({type: 'LOGIN_USER', payload: userData});
    setTimeout(() => {
      localStorage.setItem('page', (request.data.isAdmin) ? 'admin' : 'user');
      window.location.reload();
    }, 1000);
    return;
}

export const modalCall = (payload) => async dispatch => {

 dispatch({ type: 'CALL_MODAL', payload});
}

export const userDetails = () => async dispatch => {
    const url = 'https://quickcreditgilli.herokuapp.com/api/v1/users';
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        'Content-type': 'application/json',
        Authorization: localStorage.getItem('auth'),
        Accept: 'application/json,text/plain,*/*',
      }),
    });
    fetch(request).then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error(res.statusText);
      }).then((obj) => {
        dispatch({type: 'LOGIN_USER', payload: obj.data})
      }).catch((err) => {
        if (err.message == 'Unauthorized') {
          dispatch({ type: 'INVALID_TOKEN'});
          localStorage.removeItem('page');
          window.location.reload();
        }
      });
}

export const checkToken = () => {
  if (!localStorage.getItem('auth')){
    localStorage.removeItem('page');
    window.location.reload()
  }
}

export const imageUpload = (image) => async dispatch => {
    const url = 'https://quickcreditgilli.herokuapp.com/api/v1/users/uploads';
    const formData = new FormData();
    formData.append('image', image);
    const request = new Request(url, {
        method: 'PATCH',
        headers: new Headers({ Authorization: localStorage.getItem('auth') }),
        body: formData,
    });

fetch(request).then(res => res.json())
    .then((obj) => {
    dispatch({type: 'UPDATE_PROFILE_PICTURE', payload: obj.data});
    });
}


export const signuser = (credentials) => async dispatch => {
    dispatch({type: 'LOADING'});
    const req = new Request( 'https://quickcreditgilli.herokuapp.com/api/v1/auth/signup', {
        method: 'POST',
        headers: new Headers({ 'Content-type': 'application/json' }),
        body: JSON.stringify(credentials),
        });
    const request = await fetch(req)
    .then(res => res.json());
    if (request.status === 400 || request.status === 409){
        // dispatch({type: 'LOGIN_ERROR', message: request.error});
        dispatch({type: 'REMOVE_LOGIN'});
        dispatch({type: 'SIGNUP_ERROR', message: request.error});
        return 'error';
    }
    dispatch({type: 'CHANGE_LOGIN'});
    dispatch({type: 'CLEAR_SIGNIN_ERROR'});
    const { token, ...userData} = request.data;
    localStorage.setItem('auth', token);
    dispatch({type: 'LOGIN_USER', payload: userData});
    setTimeout(() => {
      localStorage.setItem('page', (request.data.isAdmin) ? 'admin' : 'user');
      window.location.reload();
    }, 1000);
    return;

}