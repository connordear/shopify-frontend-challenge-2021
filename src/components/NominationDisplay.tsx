import React, { FC, useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { nomineesAtom } from '../state';
import { Movie } from '../types';
import update from 'immutability-helper';
import '../styles/NominationDisplay.css';

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
                    <div className={'NominationDisplay_img_wrapper'}>
                        <img src={movie.Poster} className={'NominationDisplay_img'} height={300} width={200} />
                    </div>
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
