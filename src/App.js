import React from "react";
import MoviesList from "./MoviesList";
import data from "./data";
import Footer from "./Footer";
import Header from "./Header";
import InfoBox from "./Info-box";
function App() {
  return (
    <>
      <Header />
      <InfoBox />
      <MoviesList />
      <Footer />
    </>
  );
}

export default App;
