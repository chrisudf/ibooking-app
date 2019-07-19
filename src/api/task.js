import axios from 'axios';

export function addTask(data){
  return axios.post('/task', data);
}

export function fetchTasks() {
  let data=[]
  return axios
    .get('/task')
    .then(res=>{
      data =res.data
      console.log(data)
      return data
    })
}