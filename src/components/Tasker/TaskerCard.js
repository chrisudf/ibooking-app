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

function TaskerMeta({ tasker }) {
  return (
    <FlexView row style={styles.meta}>
      <i className="fa fa-list-alt" style={{ paddingTop: 3 }} />
      <p style={{ flex: 1, paddingLeft: 3 }}>{tasker._id || ''}</p>
      {/* <i className="fa fa-calendar" style={{ paddingTop: 3 }} />{' '} */}
      {/* <span style={{ paddingLeft: 3 }}>{'09/09'}</span> */}
    </FlexView>
  );
}

function Footer({ tasker }) {
  return (
    <FlexView row style={{ padding: 5, alignItems: 'center' }}>
      <Link
        className="btn-borderless"
        style={{ paddingLeft: 8 }}
        to={{
          pathname: `/taskers/edit/${tasker._id}`,
          state: { tasker },
        }}>
        <i className="fa fa-pencil-square-o" style={{ fontSize: 15 }} /> EDIT
      </Link>
    </FlexView>
  );
}

export default function TaskerCard({ tasker }) {
  return (
    <div
      className="col-sm-6 col-md-4"
      style={{
        marginBottom: 15,
      }}>
      <div className="jr-tasker-card">
        <Link
          to={{
            pathname: `/taskers/${tasker._id}`,
            state: { tasker },
          }}>
          <CoverPhoto img={tasker.cover} />
        </Link>

        <div style={styles.contentWrapper}>
          <TaskerMeta tasker={tasker} />
          <h4 className="text-center jr-tasker-card__name"> {tasker.firstName} {tasker.lastName}</h4>
          {/* <p>{tasker.dob}</p> */}
          <p>e-mail: {tasker.email}</p>
          <p>phone: {tasker.phone}</p>
          <p className="jr-tasker-card__introduction">description: {tasker.description}</p>
        </div>

        <hr style={styles.separator} />
        {/* <Footer tasker={tasker} /> */}
      </div>
    </div>
  );
}
