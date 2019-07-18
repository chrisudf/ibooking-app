import React, { Component } from 'react';
import Button, { LoadingButton } from '../UI/Button';
export default class TaskEditView extends Component {
  constructor(props) {
    super(props);
    this.state = { task: {}, isSaving: false };
  }

  render() {
    const { task, isSaving } = this.state;
    return (
      <form className="jr-form-edit">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Category</label>
              <input
                className="form-control"
                name="category"
                value={task.category || ''}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>title</label>
              <input
                className="form-control"
                name="title"
                value={task.title || ''}
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
                value={task.description || ''}
              />
            </div>
          </div>
        </div>
        <LoadingButton type="submit" loading={isSaving}>
          <span style={{ paddingLeft: 3 }} />
          Save
        </LoadingButton>
        <Button> Cancel </Button>
      </form>
    );
  }
}
