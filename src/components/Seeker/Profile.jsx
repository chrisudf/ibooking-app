import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {withRouter} from "react-router-dom";
import { fetchSeekerById, addSeeker, updateSeeker } from '../../api/seeker';
import BlockUi from "react-block-ui";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeker:{},
      isSaving: false,
      isFetching: false, 
      error: null
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((preState) => {
      const seeker = { ...preState.seeker };
      seeker[name] = value;
      return { seeker };
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const seeker =this.state.seeker
    this.setState({ isSaving: true });
    addSeeker(seeker)
    .then(res=>{
      // res.status ===200? (this.props.history.push(`/Profile`)):(console.log("wrong"))
      console.log('res=>',res)
      window.alert("Seeker's profile uploaded !")
    })   
      // console.log(seeker._id)
      //need to make error handler,an alert window for example
    .catch(error =>{
      let err=""
      err=error.response
      console.log(error.response)
      console.log(err)
      window.alert(error.response.data)
    })
    }

  render() {
    const {seeker} = this.state;
    return (
        <form className="jr-form-edit" onSubmit={this.handleSubmit}>
          <div>
            <p>Please complete the profile before posting your tasks</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>first name</label>
                <input
                  className="form-control"
                  name="firstName"
                  value={seeker.firstName || ''}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>last name</label>
                <input
                  className="form-control"
                  name="lastName"
                  value={seeker.lastName || ''}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>date of birth</label>
                <input
                  className="form-control"
                  name="dob"
                  value={seeker.dob || ''}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>email</label>
                <input
                  className="form-control"
                  name="email"
                  value={seeker.email || ''}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>phone</label>
                <input
                  className="form-control"
                  name="phone"
                  value={seeker.phone || ''}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Description</label>
                <textarea
                  style={{ height: 100 }}
                  className="form-control"
                  name="description"
                  value={seeker.description || ''}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <Button type="submit" >
            <span style={{ paddingLeft: 3 }} />
            Save
          </Button>
          <Button onClick={this.handleCancel}> Cancel </Button>
        </form>
    );
  }
}

export default withRouter(Profile);
