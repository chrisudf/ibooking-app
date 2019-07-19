import axios from 'axios';

export function addUser(data) {
  return axios.post('/users', data)
}