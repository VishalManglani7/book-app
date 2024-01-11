//form similar to contact me from react portfolio project
// can do this as a form and add to books array that gets mapped
//User enters bookname/authorname and submits. Then pushed to array in Book.jsx and mapped to MyList.jsx
//use state starting with empty input
//use 
import { useState } from 'react';
export default function UpdateList() {
    const [formState, setFormState] = useState({
        bookName: '',
        bookAuthor:'',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMessage){
            console.log('Add book to your library!', formState);
        }
    };
    <div>
    <h2>Please reach out to me using the form below. I always respond in a timely manner. </h2>
      <form className="update-form" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="bookName">Title:</label>
        <input
          type="text"
          placeholder="Enter book mtitle"
          value={bookName}
          name="bookName"
          className="update-input"
          onChange={handleChange} 
        ></input>
        <label htmlFor="bookAuthor">Author:</label>
        <input
          type="text"
          placeholder="Enter Author's name:"
          value={bookAuthor}
          name="bookAuthor"
          className="update-input"
          onChange={handleChange} 
        ></input>
        <label htmlFor="message">Name:</label>
         <input
          type="text"
          placeholder="Enter your message: (must be 1-500 characters long)"
          value={message}
          name="message"
          className="contact-input"
          onChange={handleChange} 
        ></input>
    </div>
        <button type="submit" className="update-button">Add</button>
      </form>
      </div>
  
}