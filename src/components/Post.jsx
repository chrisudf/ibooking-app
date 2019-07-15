// import React, { Component } from 'react';

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render(){
//     return(
//       <div>
//         <p>dw</p>
//       </div>
//     )
//   }
// }

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
              <label>Code</label>
              <input
                className="form-control"
                name="code"
                value={task.code || ''}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                name="name"
                value={task.name || ''}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Introduction</label>
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
