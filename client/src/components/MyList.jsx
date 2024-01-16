import React from 'react';
import Book from './Book';
function Library({bookList}) {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statment in index.js
  // we should probably seed some data, but let me know thoughts. 
  // i think the image file should just be a generic book icon that is auto assigned to all books
  const books = [
    {
    },
  ];
  return (
    <div>
      <div className="d-flex">
        {bookList.length === 0 ? (
                    <p>Add books to your library on the Update List Page!</p>
                  ) : (
                    bookList.map((book, index) => (
                      <Book book={book} key={`book-${index}`} />
                    ))
                  )}
      </div>
    </div>
  );
}
export default Library;