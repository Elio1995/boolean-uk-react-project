import React from "react";
import useStore from "../store";

function MainMenu() {
  const books = useStore((store) => store.books);

  return (
    <main className="main-section">
      <ul class="list-cards">
        {books.map((book) => (
          <li class="card">
            <div>
              <img src={book.image} class="card-image" alt={book.title}></img>
              <h3>{book.title}</h3>
              <p>By {book.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default MainMenu;
