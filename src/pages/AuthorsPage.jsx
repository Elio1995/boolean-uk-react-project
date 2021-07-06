import React from "react";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";
import useStore from "../store";

function AuthorsPage() {
  const authors = useStore((store) => store.authors);
  const selectedAuthor = useStore((store) => store.selectedAuthor);

  return (
    <>
      <Header />
      {/* <div className="space"></div>
      <div className="author-main"> */}
      <div className="author-name-image">
        <h3>{selectedAuthor.name}</h3>
        <img
          height="185px"
          width="185px"
          src={selectedAuthor.image}
          alt={selectedAuthor.name}
        ></img>
      </div>
      <div className="author-biography">
        {" "}
        <h2>Biography</h2>
        <p>{selectedAuthor.biography}</p>
      </div>

      {/* </div> */}

      <RightMenu />
    </>
  );
}

export default AuthorsPage;
