import React from "react";
import useStore from "../store";

function BookDetailsPage() {
  const books = useStore((store) => store.books);
  const selectedBook = useStore((store) => store.selectedBook);
  return (
    <div className="detail-page-card">
      <h2>{selectedBook.title}</h2>
      <img
        height="500px"
        width="500px"
        src={selectedBook.image}
        className="selected-card-image"
        alt=""
      ></img>
      <h3>Author: {selectedBook.author}</h3>
      <h3>Pages: {selectedBook.pages}</h3>
      <p>{selectedBook.description}</p>
      <button>
        {" "}
        <a
          href={`https://www.google.com/search?q=${
            "buy" + selectedBook.title.split(" ").join("+")
          }`}
        >
          Buy it now!
        </a>
      </button>
      {/* <img
        src="https://image.flaticon.com/icons/png/512/1077/1077035.png"
        target="_blank"
        className="favourite"
        alt="heart"
      ></img> */}
    </div>
  );
}

// href={`https://www.google.com/search?q=${el
//                 .join("+")}`}

export default BookDetailsPage;
