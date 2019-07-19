import axios from 'axios';

export function login(username, password) {
  return axios.post('/auth', { username, password }).then(auth => {
    const data = auth.data;
    console.log(data)
    localStorage.setItem('jwt_token', data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.jwt_token}`;
    return data;
  });
}

export function logout() {
  localStorage.removeItem('jwt_token');
  return Promise.resolve(null);
}

export function getToken() {
  return localStorage.jwt_token;
}

export function loggedIn() {
  let token = getToken();
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return !!token;
}

// export default auth;
