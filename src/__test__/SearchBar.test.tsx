import { SearchBar } from '../components';
import React from 'react';
import { mount, render } from 'enzyme';
import { RecoilRoot } from 'recoil';
import { getRandomInitializeStateFunction } from './common';
import { getByText, waitFor } from '@testing-library/react';

// Some low hanging fruit..
test('SearchBar renders', () => {
    const wrapper = mount(
        <RecoilRoot>
            <SearchBar />
        </RecoilRoot>,
    );
    const div = wrapper.find('.SearchBar_wrapper');
    expect(div.children()).toHaveLength(3); // input, spinner, ul
});

test('SearchBar populates with results if value changes', async () => {
    const wrapper = mount(
        <RecoilRoot>
            <SearchBar />
        </RecoilRoot>,
    );
    const input = wrapper.find('.SearchBar_input');
    input.simulate('change', { target: { value: 'inception' } });
    const ul = wrapper.find('.SearchBar_ul');
    await waitFor(() => {
        ul.update();
        expect(wrapper.find('.MSR_li')).toHaveLength(10);
    });
});

test('SearchBar clears results if value is cleared', async () => {
    const wrapper = mount(
        <RecoilRoot>
            <SearchBar />
        </RecoilRoot>,
    );
    const input = wrapper.find('.SearchBar_input');
    input.simulate('change', { target: { value: 'inception' } });
    const ul = wrapper.find('.SearchBar_ul');
    await waitFor(() => {
        ul.update();
        expect(wrapper.find('.MSR_li')).toHaveLength(10);
    });
    input.simulate('change', { target: { value: '' } });
    // reset should be called here
    await waitFor(() => {
        ul.update();
        expect(wrapper.find('.MSR_li')).toHaveLength(0);
    });
});

test('SearchBar enabled below MAX_NOMINEES', () => {
    const initializeState = getRandomInitializeStateFunction(4);

    const wrapper = render(
        <RecoilRoot initializeState={initializeState}>
            <SearchBar />
        </RecoilRoot>,
    );
    const input = wrapper.find('input');
    expect(!input.html()?.includes('disabled=""'));
});
test('SearchBar disables after reaching MAX_NOMINEES', () => {
    const initializeState = getRandomInitializeStateFunction(5);

    const wrapper = render(
        <RecoilRoot initializeState={initializeState}>
            <SearchBar />
        </RecoilRoot>,
    );
    const input = wrapper.find('input');
    expect(input.html()?.includes('disabled=""'));
});
