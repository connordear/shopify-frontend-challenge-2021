import { Page } from '../components';
import React from 'react';
import { mount } from 'enzyme';
import { RecoilRoot } from 'recoil';
import { getRandomInitializeStateFunction } from './common';

test('Page renders', () => {
    const initializeState = getRandomInitializeStateFunction(4);

    const wrapper = mount(
        <RecoilRoot initializeState={initializeState}>
            <Page />
        </RecoilRoot>,
    );
    // check footer comes in
    const div = wrapper.find('.bottom-right-fixed');
    expect(div.text()).toBe('Created by Connor Dear');
});

test('Page renders with LocalStorage data', () => {
    localStorage.setItem(
        'LS_NOMINEES',
        '[["tt1375666",{"imdbID":"tt1375666","Title":"Inception","Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","Year":"2010","Type":"movie","Rated":"","Released":"","Runtime":"","Genre":"","Director":"","Writer":"","Actors":"","Plot":"","Language":"","Country":"","Awards":"","Ratings":[],"Metascore":"","imdbRating":"","imdbVotes":"","DVD":"","BoxOffice":"","Production":"","Website":""}]]',
    );
    const wrapper = mount(
        <RecoilRoot>
            <Page />
        </RecoilRoot>,
    );
    // check footer comes in
    const div = wrapper.find('.bottom-right-fixed');
    expect(div.text()).toBe('Created by Connor Dear');
    // Check movie is displayed
    const h3 = wrapper.find('.NominationDisplay_title');
    expect(h3.text()).toEqual('Inception (2010)');
});

test('Page renders with erroneous LocalStorage data', () => {
    localStorage.setItem(
        'LS_NOMINEES',
        ' fjdklsa;fd NOT GOOD JSON"Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","Year":"2010","Type":"movie","Rated":"","Released":"","Runtime":"","Genre":"","Director":"","Writer":"","Actors":"","Plot":"","Language":"","Country":"","Awards":"","Ratings":[],"Metascore":"","imdbRating":"","imdbVotes":"","DVD":"","BoxOffice":"","Production":"","Website":""}]]',
    );
    const wrapper = mount(
        <RecoilRoot>
            <Page />
        </RecoilRoot>,
    );
    // check footer comes in
    const div = wrapper.find('.bottom-right-fixed');
    expect(div.text()).toBe('Created by Connor Dear');
});
