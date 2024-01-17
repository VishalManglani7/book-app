//form similar to contact me from react portfolio project
// can do this as a form and add to books array that gets mapped
//User enters bookname/authorname and submits. Then pushed to array in Book.jsx and mapped to MyList.jsx
//use state starting with empty input
//use 
import { useMutation } from '@apollo/client';
import { ADDBOOK } from '../utils/mutations';
import { useState } from 'react';
// import MyList from "./MyList";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function UpdateList() {

    const [formState, setFormState] = useState({
        bookName: '',
        bookAuthor:'',
        reaction: ''
    });
    const [update, { error, newBook}] = useMutation(ADDBOOK);


  // const [bookList, setBookList] = useState([MyList]);       
//issue is above with mylist
    // const [errorMessage, setErrorMessage] = useState('');
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!errorMessage){
          const {newBook} = await update({variables: {...formState},});;
          // {
          //         bookName: bookName,
          //         authorName: authorName,
          //         reactions: [reaction]
          //       };

      //  setBookList((prevList) => [...prevList, newBook]);      

      setFormState("");      
      
            console.log('Add book to your library!', formState);
        }
        
    };
    return (
      <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="bookName">
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          autoFocus
          type="text"
          name="bookName"
          value={formState.bookName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group size="lg" controlId="bookAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          name="bookAuthor"
          value={formState.bookAuthor}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group size="lg" controlId="reaction">
        <Form.Label>Reaction</Form.Label>
        <Form.Control
          type="text"
          name="reaction"
          value={formState.reaction}
          onChange={handleChange}
        />
      </Form.Group>
      <Button block size="lg" type="submit" style={{cursor:'pointer'}}>
        Add
      </Button>
    </Form>
    )}