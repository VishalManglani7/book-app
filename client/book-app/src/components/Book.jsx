import * as projects from '../assets'

function Book({ book }) {
    const { bookName, bookAuthor, reactions } = book;
  
    return (
      <section>
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
      <div className="d-flex">
            <h3>Reactions: </h3>
            <div>
            {reactions.map((reaction)=> (
                <Reaction reaction={reaction} key={"reaction-" + reaction.reactionBody} />
            ))}
            </div>
        </div>
      </section>
    );
  }
  
  export default Book;