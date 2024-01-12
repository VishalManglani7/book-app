import Book from "./Book";

function Library() {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statment in index.js
  const books = [
    
    {
    },

  ];

  // for each project, use the Project component to build a project
  return (
    <div>
      <div className="d-flex">
        {/* need ternary operator */}
        {/* if projects is empty -> "Add to your library"
        else : function that maps out the books added */}

        {books.map((book) => (
          <Book book={book} key={"book-" + book.name} />
        ))}
      </div>
    </div>
  );
}

export default Library;




//please look at this after looking at update list. I think something as simple as this should do the trick here:

// import React from 'react';
// import Book from './Book';

// function Library({ bookList }) {
//   return (
//     <div>
//       <div className="d-flex">
//         {bookList.length === 0 ? (
//           <p>Add books to your library on the Update List Page!</p>
//         ) : (
//           bookList.map((book, index) => (
//             <Book book={book} key={`book-${index}`} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Library;
