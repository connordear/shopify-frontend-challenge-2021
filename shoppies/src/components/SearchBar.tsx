import { Space } from 'antd';
import axios from 'axios';
import React, { CSSProperties, FC, useState } from 'react';
import { IOmdbResponse, Movie } from '../types';
import { MovieSearchResult } from './MovieSearchResult';

const searchBarStyle: CSSProperties = {
    width: '100%',
    padding: 10,
    borderRadius: 5,
};

export const SearchBar: FC = () => {
    const [searchText, setSearchText] = useState('');
    const [searching, setSearching] = useState(false);
    const [focused, setFocused] = useState(false);
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [error, setError] = useState<string>('');

    const reset = () => {
        setSearchText('');
        setSearching(false);
        setSearchResults([]);
        setError('');
    };

    const getMoviesByName = async (searchString: string) => {
        if (searchString.length === 0) return reset();
        setSearching(true);
        axios
            .get<IOmdbResponse>(`http://omdbapi.com/?s=${searchString}&type=movie&apikey=46b690a6`)
            .then((res) => {
                if (res.data.Response === 'True') {
                    setError('');
                    setSearchResults(res.data.Search.map((movieData) => new Movie(movieData)));
                } else {
                    setError(res.data.Error);
                    setSearchResults([]);
                }
            })
            .catch((error) => {
                console.log(error);
            });
        setSearching(false);
    };

    const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        getMoviesByName(e.target.value);
    };

    return (
        <>
            <div style={{ width: '80%', margin: '0 auto' }}>
                <input
                    style={searchBarStyle}
                    value={searchText}
                    type={'text'}
                    onChange={handleInputTextChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                ></input>
                <div
                    style={{
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                        width: '103%',
                        height: focused && searchText.length > 0 ? 300 : 0,
                        transition: 'height 0.3s ease',
                        position: 'fixed',
                    }}
                >
                    {searchResults.map((movie) => (
                        <MovieSearchResult key={movie.imdbId} movie={movie} />
                    ))}
                </div>
                {/* <p>{error}</p> */}
            </div>
        </>
    );
};
