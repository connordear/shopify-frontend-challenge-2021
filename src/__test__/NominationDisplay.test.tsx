import React from 'react';
import { mount } from 'enzyme';
import { getInitializeStateFunctionFromMovie, sampleMovie } from './common';
import { RecoilRoot } from 'recoil';
import { NominationDisplay } from '../components/NominationDisplay';

test('NominationDisplay correctly displays movie title & year', () => {
    const initializeState = getInitializeStateFunctionFromMovie(sampleMovie);
    const wrapper = mount(
        <RecoilRoot initializeState={initializeState}>
            <NominationDisplay movie={sampleMovie} />
        </RecoilRoot>,
    );
    const h3 = wrapper.find('.NominationDisplay_title');
    expect(h3.text()).toEqual(`${sampleMovie.Title} (${sampleMovie.Year})`);
});
