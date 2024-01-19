import React from "react";
import { useQuery } from "@apollo/client";
import { ME } from "../utils/queries";
import Auth from "../utils/auth";

function MyList() {
  const { data, loading, error } = useQuery(ME);
  const userBooks = data?.me.booksRead || [];
  console.log(userBooks);
  if (loading) {
    return <div>LOADING...</div>;
  }
  return (
    <>
    {!Auth.loggedIn() && window.location.replace('/login')}
      <div>
        <div className="d-flex">
          {userBooks.map((book) => (
            <>
              <p>{book.bookName}</p>
              <p>{book.bookAuthor}</p>
            </>
          ))}
          {error && <div>{error.message}</div>}
        </div>
      </div>
    </>
  );
}

export default MyList;