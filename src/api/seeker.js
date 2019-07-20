import axios from 'axios';

export function addSeeker(data) {
  return axios.post('/seeker', data);
}

export function fetchSeekerById(id){
  let data =[]
  return axios
    .get(`/seeker/${id}`)
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

export function updateSeeker(){
  return
}
