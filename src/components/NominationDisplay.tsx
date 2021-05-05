import React, { FC, useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { nomineesAtom } from '../state';
import { Movie } from '../types';
import update from 'immutability-helper';
import '../styles/NominationDisplay.css';
import { Col, Row, Space } from 'antd';

interface NominationDisplayProps {
    movie: Movie;
}

export const NominationDisplay: FC<NominationDisplayProps> = ({ movie }) => {
    const [nominees, setNominees] = useRecoilState(nomineesAtom);

    const removeMovie = useCallback(() => {
        setNominees((nominees) => update(nominees, { $remove: [movie.imdbID] }));
    }, [movie, nominees]);

    return (
        <li className={'NominationDisplay_li'}>
            <div className={'NominationDisplay_wrapper'} onClick={removeMovie}>
                {movie.Poster !== 'N/A' ? (
                    <img src={movie.Poster} height={300} width={200} />
                ) : (
                    <div className={'NominationDisplay_filler'}> </div>
                )}
                <h3 className={'centered-text'}>
                    {movie.Title} ({movie.Year})
                </h3>
            </div>
        </li>
    );
};
