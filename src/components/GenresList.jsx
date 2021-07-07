import React, { useEffect } from "react";
import useStore from "../store";

function GenresList() {
  const selectedGenre = useStore((store) => store.selectedGenre);
  const genres = useStore((store) => store.genres);
  const genre = useStore((store) => store.genre);
  const getFilteredBooks = useStore((store) => store.getFilteredBooks);
  console.log("genre", genre);

  useEffect(() => {
    getFilteredBooks();
  }, [genre]);

  genre.length && getFilteredBooks;

  return (
    <form autoComplete="off" className="genre-form">
      <li>
        <input
          onChange={(Event) => selectedGenre(Event)}
          value="All"
          name="genre"
          type="radio"
        ></input>{" "}
        All{" "}
      </li>
      {genres.map((genre) => (
        <li key={genre.id}>
          <input
            onChange={(Event) => selectedGenre(Event)}
            value={genre.name}
            name="genre"
            type="radio"
          ></input>
          {genre.name}{" "}
        </li>
      ))}
    </form>
  );
}
export default GenresList;
