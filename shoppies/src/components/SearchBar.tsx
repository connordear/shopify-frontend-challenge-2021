import { Space } from 'antd';
import axios from 'axios';
import React, { CSSProperties, FC, useState } from 'react';
import { IOmdbResponse, Movie } from '../types';

const searchBarStyle: CSSProperties = {
    width: '80%',
};

export const SearchBar: FC = () => {
    const [searchText, setSearchText] = useState('');
    const [searching, setSearching] = useState(false);
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
            <input style={searchBarStyle} value={searchText} type={'text'} onChange={handleInputTextChange}></input>
            <div>
                <Space>{searchResults.map((movie) => movie.Title)}</Space>
                <p>{error}</p>
            </div>
        </>
    );
};
