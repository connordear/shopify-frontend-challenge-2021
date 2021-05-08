import { NominationsList } from '../components';
import React from 'react';
import { mount } from 'enzyme';
import { RecoilRoot } from 'recoil';
import { getRandomInitializeStateFunction } from './common';

test('NominationsList renders', () => {
    const initializeState = getRandomInitializeStateFunction(4);

    const wrapper = mount(
        <RecoilRoot initializeState={initializeState}>
            <NominationsList />
        </RecoilRoot>,
    );
    const div = wrapper.find('.NominationsList_wrapper');
    expect(div.exists());
});
