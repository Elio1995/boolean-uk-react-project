import React from "react";
import useStore from "../store";

function AuthorsList() {
  const authors = useStore((store) => store.authors);

  return (
    <div>
      {authors.map((author) => (
        <li>
          <p>{author.name}</p>
        </li>
      ))}
    </div>
  );
}

export default AuthorsList;
