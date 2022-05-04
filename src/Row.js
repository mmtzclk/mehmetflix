import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <StyledRow>
      <h1>{title}</h1>
      <Posters>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`poster ${isLargeRow && "posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </Posters>
    </StyledRow>
  );
}

const StyledRow = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  h1 {
    margin-left: 20px;
  }
  .poster {
    max-height: 150px;
    object-fit: contain;
    margin-right: 10px;
    transition: transform 450ms;
    :hover {
      transform: scale(1.08);
      opacity: 1;
    }
  }
  .posterLarge {
    max-height: 350px;
  }
`;

const Posters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Row;
