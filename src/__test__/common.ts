import { MutableSnapshot } from 'recoil';
import { nomineesAtom } from '../state';
import { Movie } from '../types';

export const sampleMovie: Movie = new Movie({
    Poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Type: 'movie',
    Year: '2001',
    imdbID: 'tt0120737',
});

export const generateRandomMovie = () => {
    const rand = Math.random();
    return new Movie({
        imdbID: rand.toString(36).substring(7),
        Title: `My random ${rand}`,
        Poster: 'Empty',
        Type: 'Movie',
        Year: '2021',
    });
};

export const getRandomInitializeStateFunction: (numMovies: number) => (mutableSnapshot: MutableSnapshot) => void = (
    numMovies = 5,
) => {
    const movies: Movie[] = [];
    for (let i = 0; i < numMovies; i++) {
        movies.push(generateRandomMovie());
    }
    return function initializeState({ set }: MutableSnapshot) {
        set(
            nomineesAtom,
            movies.reduce((prev, curr) => {
                prev.set(curr.imdbID, curr);
                return prev;
            }, new Map<string, Movie>()),
        );
    };
};

export const getInitializeStateFunctionFromMovie: (movie: Movie) => (mutableSnapshot: MutableSnapshot) => void = (
    movie,
) => {
    return function initializeState({ set }: MutableSnapshot) {
        set(
            nomineesAtom,
            new Map<string, Movie>([[movie.imdbID, movie]]),
        );
    };
};
