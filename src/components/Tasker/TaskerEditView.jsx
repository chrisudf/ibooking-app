import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Styles from "../../styles/post.module.scss";

import { withRouter } from "react-router-dom";
import { fetchTaskerById, addTasker, updateTasker } from "../../api/tasker";
import BlockUi from "react-block-ui";

class TaskerEditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasker: {},
      isSaving: false,
      isFetching: false,
      error: null
    };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(preState => {
      const tasker = { ...preState.tasker };
      tasker[name] = value;
      return { tasker };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const tasker = this.state.tasker;
    // console.log(tasker)
    this.setState({ isSaving: true });
    addTasker(tasker)
      .then(res => {
        res.status === 200
          ? this.props.history.push("/")
          : console.log("wrong");
        console.log("res=>", res);
      })
      .catch(error => {
        let err = "";
        err = error.response;
        console.log(error.response);
        console.log(err);
        window.alert(error.response.data);
      });
  };
  render() {
    const { tasker } = this.state;
    return (
      <Container className={Styles.postContainer}>
        <Row>
          <Col xs={12}>
            <h1 className={Styles.postTitle}>Join Us Now</h1>
            <p className={Styles.postIntro}>
              It's time to enjoy our high quality, trust-worthy cleaning service !
            </p>
            <div className={Styles.formContainer}>
              <form className={Styles.formContent} onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>First name</label>
                      <input
                        className="form-control"
                        name="firstName"
                        value={tasker.firstName || ""}
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
                        value={tasker.lastName || ""}
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
                        value={tasker.dob || ""}
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
                        value={tasker.email || ""}
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
                        value={tasker.phone || ""}
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
                        value={tasker.description || ""}
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

export default withRouter(TaskerEditView);
