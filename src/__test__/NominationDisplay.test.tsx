import React from 'react';
import { mount } from 'enzyme';
import { getInitializeStateFunctionFromMovie, sampleMovie, sampleMovie2 } from './common';
import { RecoilRoot } from 'recoil';
import { NominationDisplay } from '../components/NominationDisplay';
import { NominationsList } from '../components';

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
test('NominationDisplay removal', () => {
    const initializeState = getInitializeStateFunctionFromMovie(sampleMovie2);
    const wrapper = mount(
        <RecoilRoot initializeState={initializeState}>
            <NominationsList />
        </RecoilRoot>,
    );
    const nom = wrapper.find('.NominationDisplay_wrapper');
    const nomUl = wrapper.find('.NominationsList_ul');
    expect(nomUl.children()).toHaveLength(1);
    nom.simulate('click');
    wrapper.update();
    const nomUlUpdated = wrapper.find('.NominationsList_ul');
    expect(nomUlUpdated.children()).toHaveLength(0);
});
