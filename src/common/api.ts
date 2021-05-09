import axios from 'axios';
import { IOmdbResponse } from '../types';

export const queryOmdbByMovieName = async (searchString: string): Promise<IOmdbResponse> => {
    try {
        const res = await axios.get<IOmdbResponse>(`https://omdbapi.com/?s=${searchString}&type=movie&apikey=46b690a6`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
    return { Error: 'Error connecting to OMDB Database.', Response: 'False', Search: [], length: 0 };
};
