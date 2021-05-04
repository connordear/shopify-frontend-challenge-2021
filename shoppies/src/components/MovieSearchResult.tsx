import React, { FC } from 'react';
import { Col, Row } from 'antd';
import { Movie } from '../types';

interface MovieSearchResultProps {
    movie: Movie;
}

export const MovieSearchResult: FC<MovieSearchResultProps> = ({ movie }) => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', margin: 5 }}>
                {/* <div style={{ height: 50, width: 50, background: 'black' }}></div> */}
                <img src={movie.Poster} alt={movie.Poster} height={75} />
                {/* {movie.Title} ({movie.Year}) */}
                <h4 style={{ marginLeft: 10 }}>
                    {movie.Title} ({movie.Year})
                </h4>
            </div>
        </>
    );
};
