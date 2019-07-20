import axios from 'axios';

export function login(username, password) {
  return axios.post('/auth', { username, password }).then(auth => {
    const data = auth.data;
    console.log(data)
    console.log(data.id)
    localStorage.setItem('jwt_token', data.token);
    localStorage.setItem('id', data.id);
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

export function getUserId() {
  return localStorage.id;
}
export function loggedIn() {
  let token = getToken();
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return !!token;
}

// export default auth;
