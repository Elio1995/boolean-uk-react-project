import React from "react";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import MainMenu from "../components/MainMenu";
import RightMenu from "../components/RightMenu";

function MainPage({ addBookstoFavourites, addBookstoRead }) {
  return (
    <>
      <Header />
      <LeftMenu />
      <MainMenu
        addBookstoFavourites={addBookstoFavourites}
        addBookstoRead={addBookstoRead}
      />
      <RightMenu />
    </>
  );
}

export default MainPage;
