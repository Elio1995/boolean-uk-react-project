import React from "react";
import useStore from "../store";

function BookDetailsPage() {
  const books = useStore((store) => store.books);
  return (
    <div class="detail-page-card">
      <h2>{books.title}</h2>
      <img src={books.image} class="selected-card-image" alt=""></img>
      <h3>Published: {books.published}</h3>
      <h3>Pages: {books.pages}</h3>
      <p>{books.description}</p>
      <button>Buy it now!</button>
      <img
        src="https://image.flaticon.com/icons/png/512/1077/1077035.png"
        class="favourite"
        alt="heart"
      ></img>
    </div>
  );
}

export default BookDetailsPage;
