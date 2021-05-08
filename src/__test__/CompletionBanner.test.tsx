import { CompletionBanner } from '../components';
import React from 'react';
import { mount } from 'enzyme';
import { RecoilRoot } from 'recoil';
import { MAX_NOMINEES } from '../common';
import { getRandomInitializeStateFunction } from './common';

test('CompletionBanner does not render if there are less than 5 nominees', () => {
    const initializeState = getRandomInitializeStateFunction(4);

    const wrapper = mount(
        <RecoilRoot initializeState={initializeState}>
            <CompletionBanner />
        </RecoilRoot>,
    );
    const div = wrapper.find('.CompletionBanner_wrapper');
    expect(div.isEmptyRender());
});

test('CompletionBanner renders if there are at least 5 nominees', () => {
    const initializeState = getRandomInitializeStateFunction(5);

    const wrapper = mount(
        <RecoilRoot initializeState={initializeState}>
            <CompletionBanner />
        </RecoilRoot>,
    );
    const p = wrapper.find('.bold');
    expect(p.text()).toBe('All Done!');
});

// Fully parameterized for various numbers of movies
for (let numMovies = 0; numMovies < 100; numMovies++) {
    test(`CompletionBanner correctly renders when ${numMovies} added`, () => {
        const initializeState = getRandomInitializeStateFunction(numMovies);

        const wrapper = mount(
            <RecoilRoot initializeState={initializeState}>
                <CompletionBanner />
            </RecoilRoot>,
        );
        if (numMovies < MAX_NOMINEES) {
            const div = wrapper.find('.CompletionBanner_wrapper');
            expect(div.isEmptyRender());
        } else {
            const p = wrapper.find('.bold');
            expect(p.text()).toBe('All Done!');
        }
    });
}
