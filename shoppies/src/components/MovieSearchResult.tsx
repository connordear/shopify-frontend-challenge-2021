import React, { FC, useCallback, useEffect, useState } from 'react';
import { Movie } from '../types';
import { nomineesAtom } from '../recoil';
import { useRecoilState } from 'recoil';
import update from 'immutability-helper';

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
        console.log(`Adding ${movie.Title} to nominees`);
        setNominees((nominees) => update(nominees, { $add: [[movie.imdbID, movie]] }));
    }, [movie]);

    return (
        <li style={{ display: 'flex', alignItems: 'center', margin: 5 }}>
            <button onClick={addToNominees} disabled={alreadyNominated}>
                <img src={movie.Poster} alt={movie.Poster} height={75} />
                <h4 style={{ marginLeft: 10 }}>
                    {movie.Title} ({movie.Year})
                </h4>
            </button>
        </li>
    );
};
