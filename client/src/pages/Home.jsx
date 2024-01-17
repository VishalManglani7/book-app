import { Fragment } from 'react';
import MyList from '../components/MyList';
import UpdateList from '../components/UpdateList';

export default function Home() {
  return (
    <Fragment>
      <p> Testing! </p>
      <MyList />
      <UpdateList />
    </Fragment>
  );
}