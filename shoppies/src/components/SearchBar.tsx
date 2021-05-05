import axios from 'axios';
import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { useDebounce, useOutsideAlerter } from '../hooks';
import { IOmdbResponse, Movie } from '../types';
import { MovieSearchResult } from './MovieSearchResult';

const searchBarStyle: CSSProperties = {
    width: '100%',
    padding: 10,
    borderRadius: 5,
};

export const SearchBar: FC = () => {
    const [debouncedSearchText, searchText, setSearchText] = useDebounce('', 250);
    const [, setSearching] = useState(false);
    const [displayResults, setDisplayResults] = useState(false);
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [error, setError] = useState<string>('');

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, () => setDisplayResults(false));

    useEffect(() => {
        getMoviesByName(debouncedSearchText);
    }, [debouncedSearchText]);

    const reset = () => {
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
    };

    return (
        <>
            <div ref={wrapperRef} style={{ width: '80%', margin: '0 auto' }}>
                <input
                    style={searchBarStyle}
                    value={searchText}
                    type={'text'}
                    onChange={handleInputTextChange}
                    onFocus={() => setDisplayResults(true)}
                ></input>
                <ul
                    style={{
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                        width: '103%',
                        height: displayResults && searchText.length > 0 ? 300 : 0,
                        transition: 'height 0.3s ease',
                        position: 'fixed',
                    }}
                >
                    {searchResults.length > 0
                        ? searchResults.map((movie) => <MovieSearchResult key={movie.imdbID} movie={movie} />)
                        : error}
                </ul>
            </div>
        </>
    );
};
