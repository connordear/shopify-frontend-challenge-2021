import React, { FC, useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { nomineesAtom } from '../recoil';
import { Movie } from '../types';
import update from 'immutability-helper';
interface NominationDisplayProps {
    movie: Movie;
}

export const NominationDisplay: FC<NominationDisplayProps> = ({ movie }) => {
    const [nominees, setNominees] = useRecoilState(nomineesAtom);

    const removeMovie = useCallback(() => {
        setNominees((nominees) => update(nominees, { $remove: [movie.imdbID] }));
    }, [movie, nominees]);

    return (
        <li onClick={removeMovie}>
            {movie.Title} ({movie.Year})
        </li>
    );
};
