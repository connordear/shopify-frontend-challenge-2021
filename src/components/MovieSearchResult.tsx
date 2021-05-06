import React, { FC, useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Movie } from '../types';
import { nomineesAtom } from '../state';
import notFoundImg from '../assets/not-found.png';
import update from 'immutability-helper';
import '../styles/MovieSearchResult.css';
interface MovieSearchResultProps {
    movie: Movie;
}

export const MovieSearchResult: FC<MovieSearchResultProps> = ({ movie }) => {
    const [nominees, setNominees] = useRecoilState(nomineesAtom);
    const [alreadyNominated, setAlreadyNominated] = useState(false);

    useEffect(() => {
        const nominated = nominees.has(movie.imdbID);
        if (nominated !== alreadyNominated) setAlreadyNominated(nominated);
    }, [nominees, movie]);

    const addToNominees = useCallback(() => {
        setNominees((nominees) => update(nominees, { $add: [[movie.imdbID, movie]] }));
    }, [movie]);

    return (
        <li className={'MSR_li'}>
            <button className={'MSR_button'} onClick={addToNominees} disabled={alreadyNominated}>
                <img src={movie.Poster.length > 0 ? movie.Poster : notFoundImg} height={75} width={50} />
                <h4 className={'MSR_title'}>
                    {movie.Title} ({movie.Year})
                </h4>
            </button>
        </li>
    );
};
