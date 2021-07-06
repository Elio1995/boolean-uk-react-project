import React from "react";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import MainMenu from "../components/MainMenu";
import RightMenu from "../components/RightMenu";

function MainPage() {
  return (
    <>
      <Header />
      <LeftMenu />
      <MainMenu />
      <RightMenu />
    </>
  );
}

export default MainPage;
