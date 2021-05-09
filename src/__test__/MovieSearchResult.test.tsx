import React from 'react';
import { mount } from 'enzyme';
import { sampleMovie } from './common';
import { RecoilRoot } from 'recoil';
import { MovieSearchResult, NominationsList } from '../components';

test('MovieSearchResult correctly displays movie title & year', () => {
    const wrapper = mount(
        <RecoilRoot>
            <MovieSearchResult movie={sampleMovie} />
            <NominationsList />
        </RecoilRoot>,
    );
    const button = wrapper.find('.MSR_button');
    button.simulate('click');
    wrapper.update();
    expect(wrapper.find('.NominationsList_ul')).toHaveLength(1);
});
