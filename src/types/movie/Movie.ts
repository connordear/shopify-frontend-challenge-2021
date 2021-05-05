import { Rating } from '../rating/Rating';
import { IMovie } from './IMovie';

export class Movie implements IMovie {
    Title = '';
    Year = '';
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
    Poster = '';
    Ratings: Rating[] = [];
    Metascore = '';
    imdbRating = '';
    imdbVotes = '';
    imdbID = '';
    Type = '';
    DVD = '';
    BoxOffice = '';
    Production = '';
    Website = '';

    constructor(movieData: IMovie) {
        Object.assign(this, movieData);
    }
}
