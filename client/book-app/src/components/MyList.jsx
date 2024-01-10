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
      {/* if books is empty -> "Add to your library"
      else: map out the books added */}
      {books.length === 0 ? (
        <p>Add to your library</p>
      ) : (
        books.map((book) => (
          <Project book={book} key={"book-" + book.name} />
        ))
      )}
    </div>
  </div>
);
}

export default Library;