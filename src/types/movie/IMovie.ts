import { IRating } from '../rating/IRating';

export interface IMovie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    Type: string;
    Rated?: string;
    Released?: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Ratings?: IRating[];
    Metascore?: string;
    imdbRating?: string;
    imdbVotes?: string;
    DVD?: string;
    BoxOffice?: string;
    Production?: string;
    Website?: string;
}
