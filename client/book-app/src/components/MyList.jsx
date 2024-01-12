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