import {useQuery} from '@apollo/client';
import {ME} from '../utils/queries';
const Library = () => {
  const {loading, data} = useQuery(ME);
  const books = data?.booksRead || [];
  const bookList = ({bookName, bookAuthor, reactions})
return (
  // <main>
  //   {loading ? (
  //           <div>Loading...</div>
  //         ) : (
  //           <div>
  //             {books && books.map((book)=>(

  //             )}
  //           </div>
          
  //           )}
  // </main>
)}
