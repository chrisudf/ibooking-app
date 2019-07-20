import React, { Component } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { addTask } from "../api/task.js";
import Styles from "../styles/post.module.scss";

export default class TaskEditView extends Component {
  constructor(props) {
    super(props);
    this.state = { task: {}, isSaving: false };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(preState => {
      const task = { ...preState.task };
      task[name] = value;
      // console.log(task)
      return { task };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const task = this.state.task;
    // console.log(task)
    this.setState({ isSaving: true });
    addTask(task)
      .then(res => {
        res.status === 200
          ? this.props.history.push("/")
          : console.log("wrong");
        console.log("res=>", res);
      })
      //need to make error handler,an alert window for example
      .catch(error => {
        console.log(error.response);
        window.alert(error.response);
        window.alert("User already exists");
      });
  };
  render() {
    const { task, isSaving } = this.state;
    return (
      <Container className={Styles.postContainer}>
        <Row>
          <Col xs={12}>
            <h1 className={Styles.postTitle}>Book your cleaning</h1>
            <p className={Styles.postIntro}>
              Its time to book our cleaning service for your home or apartment.
            </p>
          </Col>
          <Col lg={8} className={Styles.formContainer}>
            <div className={Styles.formTitle}>Cleaning Preferences</div>
            <form className={Styles.formContent} onSubmit={this.handleSubmit}>
              <Row>
                <Col xs={6}>
                  <label>What type of cleaning?</label>
                  <input
                    className="form-control"
                    name="category"
                    value={task.category || ""}
                    onChange={this.handleInputChange}
                    required
                    autoFocus
                  />
                </Col>
                <Col xs={6}>
                    <label>Title of your booking:</label>
                    <input
                      className="form-control"
                      name="title"
                      value={task.title || ""}
                      onChange={this.handleInputChange}
                      required
                      autoFocus
                    />
                </Col>
                <Col xs={12} className={Styles.taskDescriptionContainer}>
                  <label>Do you have any requerments? </label>
                  <p className={Styles.taskDescription}>
                    * Including hours and date, address and extras requirement.
                  </p>
                  <textarea
                    style={{ height: 100 }}
                    className="form-control"
                    name="description"
                    value={task.description || ""}
                    onChange={this.handleInputChange}
                    required
                    autoFocus
                  />
                </Col>
              </Row>
              <Button type="submit" className={Styles.bookBtn}>
                Save
              </Button>
              <Button className={Styles.bookBtn}> Cancel </Button>
            </form>
          </Col>
          <Col lg={3} className={Styles.cleanImage}></Col>
        </Row>
      </Container>
    );
  }
}
