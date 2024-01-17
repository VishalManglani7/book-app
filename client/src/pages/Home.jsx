import { useQuery } from '@apollo/client';
import { Fragment } from 'react';
// import Header from '../components/Header';
import MyList from '../components/MyList';
import UpdateList from '../components/UpdateList';

// import {QUERY }


export default function Home() {
console.log('Displaying Home Page');
    return (
        
        <Fragment>
            <p> Testing! </p>
            <MyList/>
            <UpdateList/>
        </Fragment>
    )
}