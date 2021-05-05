import { atom } from 'recoil';
import { Movie } from '../../types/movie/Movie';

/**
 * Stores an array of imdbID's for the movies that we have added to our nominees list.
 */
export const nomineesAtom = atom<Map<string, Movie>>({
    key: 'nominees',
    default: new Map<string, Movie>(),
});
