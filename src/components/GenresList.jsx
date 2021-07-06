import React from "react";
import useStore from "../store";

function GenresList() {
  const genres = useStore((store) => store.genres);
  console.log("Genres", genres);
  return (
    <div>
      <li>
        <input name="author" type="radio"></input> All{" "}
      </li>
      {genres.map((genre) => (
        <li>
          <input name="author" type="radio"></input>
          {genre.name}
        </li>
      ))}
    </div>
  );
}
export default GenresList;
