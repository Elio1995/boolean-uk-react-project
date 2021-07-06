import React from "react";
import BookDetailsPage from "../components/BookDetailsPage";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";

function BookDetails() {
  return (
    <>
      <Header />
      <LeftMenu />
      <BookDetailsPage />
      <RightMenu />
    </>
  );
}

export default BookDetails;
