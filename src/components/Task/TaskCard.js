import React from 'react';
import { Link } from 'react-router-dom';

// import Button from '../UI/Button';
import FlexView from '../../../src/UI/FlexView';

const PUBLIC_URL = process.env.PUBLIC_URL;
const styles = {
  cover: {
    width: '100%',
    height: 175,
    objectFit: 'cover',
  },
  contentWrapper: {
    backgroundColor: 'white',
    height: 230,
    padding: '10px 15px',
  },
  meta: {
    color: '#9a9a9a',
    fontSize: 14,
  },
  separator: {
    margin: '3px 10px',
  },
};

function CoverPhoto({ img }) {
  return (
    <div>
      <img src={`${PUBLIC_URL}/${img}`} style={styles.cover} alt=""/>
    </div>
  );
}

function TaskMeta({ task }) {
  return (
    <FlexView row style={styles.meta}>
      <i className="fa fa-list-alt" style={{ paddingTop: 3 }} />
      {/* <p style={{ flex: 1, paddingLeft: 3 }}>{task._id || ''}</p> */}
    </FlexView>
  );
}

// function Footer({ tasker }) {
//   // <span style={{ flex: 1, textAlign: 'right', paddingRight: 5, color: '#9a9a9a' }}>
//   //   100+ studied
//   // </span>
//   return (
//     <FlexView row style={{ padding: 5, alignItems: 'center' }}>
//       <Link
//         className="btn-borderless"
//         style={{ paddingLeft: 8 }}
//         to={{
//           pathname: `/taskers/edit/${tasker._id}`,
//           state: { tasker },
//         }}>
//         <i className="fa fa-pencil-square-o" style={{ fontSize: 15 }} /> EDIT
//       </Link>
//     </FlexView>
//   );
// }

export default function TaskerCard({ task }) {
  return (
    <div
      className="col-sm-6 col-md-4"
      style={{
        marginBottom: 15,
      }}>
      <div className="jr-tasker-card">
        <Link
          to={{
            pathname: `/taskers/${task._id}`,
            state: { task },
          }}>
          <CoverPhoto img={task.cover} />
        </Link>

        <div style={styles.contentWrapper}>
          <TaskMeta task={task} />
          <h4 className="text-center jr-tasker-card__name"> {task.title}</h4>
          <p>category: {task.category}</p>
          <p className="jr-tasker-card__introduction">description: {task.description}</p>
        </div>

        <hr style={styles.separator} />
        {/* <Footer tasker={tasker} /> */}
      </div>
    </div>
  );
}
