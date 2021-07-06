import React from "react";
import useStore from "../store";

function AuthorsList() {
  const authors = useStore((store) => store.authors);
  const inSelectedAuthor = useStore((store) => store.inSelectedAuthor);

  return (
    <div>
      {authors.map((author) => (
        <li key={author.id}>
          <button
            onClick={() => {
              inSelectedAuthor(author);
            }}
          >
            <p>{author.name}</p>
          </button>
        </li>
      ))}
    </div>
  );
}

export default AuthorsList;
