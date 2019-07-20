import React, { Component } from "react";
// import Button, { LoadingButton } from '../../UI/Button';
import { Container, Col, Row, Button } from "react-bootstrap";
import Styles from "../../styles/post.module.scss";
import { withRouter } from "react-router-dom";
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
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(preState => {
      const seeker = { ...preState.seeker };
      seeker[name] = value;
      return { seeker };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const seeker =this.state.seeker
    this.setState({ isSaving: true });
    addSeeker(seeker)
    .then(res=>{
      // res.status ===200? (this.props.history.push(`/Profile`)):(console.log("wrong"))
      console.log('res=>',res)
      window.alert("Seeker's profile uploaded !")
      })
      .catch(error =>{
        let err=""
        err=error.response
        console.log(error.response)
        console.log(err)
        window.alert(error.response.data)
        // window.alert(err.toString().substring(20,50))
      });
  };
  // componentDidMount() {
  //   if (this._isNew()) {
  //       return;
  //   }
  //   const taskerId = this.props.match.params.id;
  //   console.log(taskerId)
  //   this.setState({ isFetching: true });
  //   fetchTaskerById(taskerId)
  //       .then(tasker => this.setState({ isFetching: false, tasker }))
  //       .catch(error => this.setState({ isFetching: false, error: error }));
  // }

  // _isNew = () => {
  //   const { id } = this.props.match.params;
  //   return id === 'NEW';
  // }
  // handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState((preState) => {
  //     const tasker = { ...preState.tasker };
  //     tasker[name] = value;
  //     return { tasker };
  //   });
  // }
  // _save = ({ id, data }) => {
  //   if (this._isNew()) {
  //       return addTasker(data);
  //   }
  //   return updateTasker(id, data);
  // }
  render() {
    const { seeker } = this.state;
    return (
      <Container className={Styles.postContainer}>
        <Row>
          <Col xs={12}>
            <h1 className={Styles.postTitle}>Join Us Now</h1>
            <p className={Styles.postIntro}>
            Please complete the profile before posting your tasks.
            </p>
            <div className={Styles.formContainer}>
              <div className={Styles.formTitle}>Personal Profile</div>
              <form className={Styles.formContent} onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>First name</label>
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
                      <label>Last name</label>
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
                      <label>Date of birth</label>
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
                      <label>Email</label>
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
                      <label>Phone</label>
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
                      <label>Description (optional)</label>
                      <textarea
                        style={{ height: 100 }}
                        className="form-control"
                        name="description"
                        value={seeker.description || ""}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <Button type="submit" className={Styles.bookBtn}>
                  Save
                </Button>
                <Button className={Styles.bookBtn}> Cancel </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Profile);
