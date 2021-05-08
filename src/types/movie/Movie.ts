import { Rating } from '../rating/Rating';
import { IMovie } from './IMovie';

export class Movie implements IMovie {
    imdbID = '';
    Title = '';
    Poster = '';
    Year = '';
    Type = '';
    Rated = '';
    Released = '';
    Runtime = '';
    Genre = '';
    Director = '';
    Writer = '';
    Actors = '';
    Plot = '';
    Language = '';
    Country = '';
    Awards = '';
    Ratings: Rating[] = [];
    Metascore = '';
    imdbRating = '';
    imdbVotes = '';
    DVD = '';
    BoxOffice = '';
    Production = '';
    Website = '';

    constructor(movieData: IMovie) {
        Object.assign(this, movieData);
    }
}
