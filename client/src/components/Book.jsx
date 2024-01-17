// // import * as books from '../assets'
// import { Accordion } from "react-bootstrap";
// // change from HTML to Accordion component from bootstrap
// function Book({ book } = {}) {
//   const { bookName, bookAuthor, reactions } = book;
//   return (
//     <section>
//     {!bookName || !bookAuthor &&  ( 
//         <div>
//         <p> No books to display. Add a book! </p>
//         </div>
//       )}
//        {/* {bookName && bookAuthor &&  ( 
//         <div className="p-3">
//         <div className="bookItem">
//         <ul>
//         <li> {bookName}</li>
//         <li> {bookAuthor}</li>
//         <ul/>
   
//         <div className="p-3">
//           <img src={books[image]} alt={bookName} className="p-img" />
//           <div className="">
//             <h1>
//               <a> {bookName}</a>{" "}
//             </h1>
//             <p>By: {bookAuthor}</p>
//             <div>
//               <h2>Reactions:</h2>
//               <ul>
//                 {reactions.map((reaction) => (
//                   <li key={reaction.reactionId}>
//                     {reaction.username}: {reaction.reactionBody} {reaction.rating}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="d-flex">
//           <h3>Reactions: </h3>
//           <div>
//             {reactions.map((reaction) => (
//               <Reaction
//                 reaction={reaction}
//                 key={"reaction-" + reaction.reactionBody}
//               />
//             ))}
//           </div>
//         </div>
//       )} */}
//     </section> 
//   )}
// export default Book;
