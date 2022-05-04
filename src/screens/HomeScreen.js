import React from "react";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORJİNAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDLER" fetchUrl={requests.fetchTrending} />
      <Row title="KOMEDİ" fetchUrl={requests.fetchComedyMovies} />
      <Row title="KORKU" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANTİK" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="BELGESEL" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
