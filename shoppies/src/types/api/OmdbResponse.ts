import { IMovie } from '..';

export interface IOmdbResponse {
    Response: string;
    Search: IMovie[];
    length: number;
    Error: string;
}
