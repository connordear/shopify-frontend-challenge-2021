import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useDebounce, useOutsideAlerter } from '../hooks';
import { IOmdbResponse, Movie } from '../types';
import { MovieSearchResult } from './MovieSearchResult';
import '../styles/SearchBar.css';

export const SearchBar: FC = () => {
    const [debouncedSearchText, searchText, setSearchText] = useDebounce('', 200);
    const [searching, setSearching] = useState(false);
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
            .get<IOmdbResponse>(`https://omdbapi.com/?s=${searchString}&type=movie&apikey=46b690a6`)
            .then((res) => {
                if (res.data.Response === 'True') {
                    setError('');
                    setSearchResults(res.data.Search.map((movieData) => new Movie(movieData)));
                } else {
                    setError(res.data.Error);
                    setSearchResults([]);
                }
                setSearching(false);
            })
            .catch((error) => {
                console.log(error);
                setSearching(false);
            });
    };

    const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    return (
        <>
            <div ref={wrapperRef} className={'flex-center SearchBar_wrapper'}>
                <input
                    // style={searchBarStyle}
                    className={'SearchBar_input input'}
                    value={searchText}
                    type={'text'}
                    onChange={handleInputTextChange}
                    onFocus={() => setDisplayResults(true)}
                    placeholder={'Enter a movie name, e.g. "moonrise kingdom"'}
                ></input>
                {searching && <div className={'SearchBar_spinner'} id={'loading'}></div>}
                <ul
                    className={'SearchBar_ul'}
                    style={{
                        height: displayResults && searchResults.length > 0 ? 300 : 0,
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
