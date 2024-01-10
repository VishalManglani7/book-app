<<<<<<< HEAD
import * as projects from '../assets'

function Book({ book }) {
    const { bookName, bookAuthor, reactions } = book;
    //user comments
  
=======
import * as books from '../assets'

function Book({ book }) {
    const { bookName, bookAuthor, reactions } = book;
>>>>>>> main
    return (
      
      <div className="p-3">
        <img
<<<<<<< HEAD
          src={projects[image]}
=======
          src={books[image]}
>>>>>>> main
          alt={bookName}
          className="p-img"
        />
        <div className="">
          <h1>
            <a> {bookName}</a>{' '}
          </h1>
<<<<<<< HEAD
          <p>"by" {bookAuthor}</p>
=======
          <p>By: {bookAuthor}</p>
          <div>
            <h2>Reactions:</h2>
            <ul>{reactions.map(reaction => ( <li key={reaction.reactionId}>{reaction.username}: {reaction.reactionBody} {reaction.rating}</li>))}</ul>
        </div>
>>>>>>> main
        </div>
      </div>
    );
  }
  
  export default Book;