import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };

    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <>
      {movie.backdrop_path && (
        <StyledBanner
          poster={`https://image.tmdb.org/t/p/original` + movie?.backdrop_path}
        >
          <Contents>
            <Title>{movie?.title || movie?.name || movie?.original_name}</Title>
            <Buttons>
              <Button>İzle</Button>
              <Button>Listem</Button>
            </Buttons>
            <Description>{truncate(movie.overview, 300)}</Description>
          </Contents>
          <FadeBottom />
        </StyledBanner>
      )}
    </>
  );
}

const StyledBanner = styled.header`
  height: 448px;
  position: relative;
  background-image: url(${(props) => props.poster});
  background-size: cover;
  background-position: center;
  object-fit: contain;
`;

const Contents = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const Buttons = styled.div``;

const Button = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

const Description = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 350px;
  height: 80px;
`;

const FadeBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.6),
    #111
  );
`;

export default Banner;
