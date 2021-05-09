import { NominationsList } from '../components';
import React from 'react';
import { mount } from 'enzyme';
import { RecoilRoot } from 'recoil';
import { getRandomInitializeStateFunction } from './common';
import { IRating, Rating } from '../types';

test('Ratings Contstructot', () => {
    const myRatingData: IRating = {
        Source: 'IMDB',
        Value: '8/10',
    };
    const myRating = new Rating(myRatingData);
    expect(myRating.Source).toBe('IMDB');
    expect(myRating.Value).toBe('8/10');
});
