import axios from 'axios';

export function fetchTaskers() {
  let data=[]
  return axios
    .get('/tasker')
    .then(res=>{
      data =res.data
      console.log(data)
      return data
    })
}

export function addTasker(data) {
  return axios.post('/tasker', data);
}
