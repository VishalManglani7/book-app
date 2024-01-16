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

//Mallory take a look at code below, wasnt sure where to pick up on above but tried to code this out in what I thought might work.
//feel free to pick and choose/let me know where you were at and we can put this page together



// import { useState } from 'react';
// //importing from my list to push the book to my list? lmk if this makes sense!
// import MyList from "./MyList";

// export default function UpdateList() {
//   const [bookName, setBookName] = useState("");
//   const [authorName, setAuthorName] = useState("");
//   const [bookList, setBookList] = useState([]);       <- did some research and it looks like this [] grabs the previous array instead of making it blank, so we add to it

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newBook = {
//       bookName: bookName,
//       authorName: authorName,
//     };

    
//     setBookList((prevList) => [...prevList, newBook]);      <- this would take our previous list and add the newbook

//     setBookName("");
//     setAuthorName("");         <-set names in form blank (not sure if this is covered when you useState, usestate above? but I think this is seperate for the form)
//   }};

//   return (
//     <div className="UpdateList">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="bookName">Book Name</label>
//         <input
//           type="text"
//           id="bookName"
//           value={bookName}
//           onChange={(event) => setBookName(event.target.value)}/>
//                 <label htmlFor="authorName">Author Name</label>
//         <input
//           type="text"
//           id="authorName"
//           value={authorName}
//           onChange={(event) => setAuthorName(event.target.value)}/>

//         <button type="submit">Add Book</button>
//       </form>

