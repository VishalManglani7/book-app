import React from "react";
import Book from "./Book"; 

function MyList({ books }) {
  return (
    <div>
      <div className="d-flex">
        {Array.isArray(books) &&
          books.map((book) => <Book book={book} key={"book-" + book._id} />)}
      </div>
    </div>
  );
}

export default MyList;