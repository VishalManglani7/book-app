import { useQuery } from '@apollo/client';
import Header from '../components/Header';
import Book from '../components/Book';
import UpdateList from '../components/UpdateList';
import { Fragment } from 'react';
// import {QUERY }


export default function Home() {
console.log('Displaying Home Page');
    return (

        <Fragment>
            <Header />
        </Fragment>
    )
}