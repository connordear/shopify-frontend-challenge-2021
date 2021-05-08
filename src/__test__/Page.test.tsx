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
