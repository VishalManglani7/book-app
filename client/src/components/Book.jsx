import React from 'react';
// import * as books from '../assets';

function Book({ book }) {
  const { bookName, bookAuthor, reactions } = book;

  return (
    <div className="p-3">
      <img src={books[image]} alt={bookName} className="p-img" />
      <div className="">
        <h1>
          <a>{bookName}</a>
        </h1>
        <p>By: {bookAuthor}</p>
        <div>
          <h2>Reactions:</h2>
          <ul>
            {reactions.map((reaction) => (
              <li key={reaction.reactionId}>
                {reaction.username}: {reaction.reactionBody} {reaction.rating}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Book;
