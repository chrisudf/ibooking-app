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

export function fetchTaskerById(id){
  let data =[]
  return axios
    .get(`/tasker/${id}`)
    .then(res=>{
      data =res.data
      return data
    })
    .catch(error => {
      if (error.response) {
        const errorData = error.response;
        throw new Error(`${errorData.status}: ${errorData.statusText}`);
      }
      throw new Error('Some error occurred');
    });
}

export function updateTasker(){
  return
}
