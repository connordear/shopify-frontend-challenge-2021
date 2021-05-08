import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useDebounce, useOutsideAlerter } from '../hooks';
import { IOmdbResponse, Movie } from '../types';
import { MovieSearchResult } from '.';
import { MAX_NOMINEES } from '../common';
import '../styles/SearchBar.css';
import { nomineeCountSelector } from '../state';
import { useRecoilValue } from 'recoil';

export const SearchBar: FC = () => {
    const nomineesCount = useRecoilValue(nomineeCountSelector);
    const [debouncedSearchText, searchText, setSearchText] = useDebounce('', 200);
    const [searching, setSearching] = useState(false);
    const [displayResults, setDisplayResults] = useState(false);
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [error, setError] = useState<string>('');

    const wrapperRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);
    useOutsideAlerter(wrapperRef, () => setDisplayResults(false));

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        if (nomineesCount >= MAX_NOMINEES) {
            reset();
            inputRef?.current?.blur();
        }
    }, [nomineesCount]);

    useEffect(() => {
        getMoviesByName(debouncedSearchText);
    }, [debouncedSearchText]);

    const reset = () => {
        setSearching(false);
        setSearchText('');
        setSearchResults([]);
        setError('');
    };

    const getMoviesByName = async (searchString: string) => {
        if (searchString.length === 0) return reset();
        axios
            .get<IOmdbResponse>(`https://omdbapi.com/?s=${searchString}&type=movie&apikey=46b690a6`)
            .then((res) => {
                if (res.data.Response === 'True' && res.data.Search.length > 0) {
                    setError('');
                    // Push into set to avoid duplicates (test "inc")
                    const uniqueMovies = res.data.Search.reduce(
                        (map, nextMovie) => map.set(nextMovie.imdbID, new Movie(nextMovie)),
                        new Map<string, Movie>(),
                    );
                    setSearchResults(Array.from(uniqueMovies.values()));
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
        setSearching(true);
        setSearchText(e.target.value);
    };

    return (
        <>
            <div ref={wrapperRef} className={'flex-center SearchBar_wrapper'}>
                <input
                    ref={inputRef}
                    className={'SearchBar_input input'}
                    value={searchText}
                    type={'text'}
                    onChange={handleInputTextChange}
                    onFocus={() => setDisplayResults(true)}
                    placeholder={'Enter a movie name, e.g. "moonrise kingdom"'}
                    disabled={nomineesCount >= MAX_NOMINEES}
                ></input>
                <div className={'SearchBar_spinner'} id={'loading'} style={{ opacity: searching ? 1 : 0 }}></div>
                <ul
                    className={'SearchBar_ul'}
                    style={{
                        height: displayResults && searchResults.length > 0 ? 300 : error.length > 0 ? 40 : 0,
                    }}
                >
                    {searchResults.length > 0 ? (
                        searchResults.map((movie) => <MovieSearchResult key={movie.imdbID} movie={movie} />)
                    ) : (
                        <p className={'red'}>{error}</p>
                    )}
                </ul>
            </div>
        </>
    );
};
