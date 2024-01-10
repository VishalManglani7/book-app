import * as projects from '../assets'

function Book({ book }) {
    const { bookName, bookAuthor, reactions } = book;
    //user comments
  
    return (
      
      <div className="p-3">
        <img
          src={projects[image]}
          alt={bookName}
          className="p-img"
        />
        <div className="">
          <h1>
            <a> {bookName}</a>{' '}
          </h1>
          <p>"by" {bookAuthor}</p>
        </div>
      </div>
    );
  }
  
  export default Book;