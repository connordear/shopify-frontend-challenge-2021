import { MovieSearchResult, Page, SearchBar } from '../components';
import React from 'react';
import { mount, render } from 'enzyme';
import { RecoilRoot } from 'recoil';
import { getRandomInitializeStateFunction, sampleMovie2 } from './common';
import { fireEvent, getByText, waitFor } from '@testing-library/react';
import App from '../App';
import { createDocumentListenersMock } from '../setupTests';
import { act } from 'react-dom/test-utils';

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
test('SearchBar populates with error if no movies found', async () => {
    const wrapper = mount(
        <RecoilRoot>
            <SearchBar />
        </RecoilRoot>,
    );
    const input = wrapper.find('.SearchBar_input');
    input.simulate('change', { target: { value: 'sadfkjlsa;dfkas;jdlfk' } });
    const ul = wrapper.find('.SearchBar_ul');
    await waitFor(() => {
        ul.update();
        expect(wrapper.find('.red')).toHaveLength(1);
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
        wrapper.update();
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

test('SearchBar is disabled >= MAX_NOMINEES', () => {
    const initializeState = getRandomInitializeStateFunction(5);

    const wrapper = render(
        <RecoilRoot initializeState={initializeState}>
            <SearchBar />
        </RecoilRoot>,
    );
    const input = wrapper.find('input');
    expect(input.html()?.includes('disabled=""'));
});

test('SearchBar transition from enabled to disabled works', () => {
    const initializeState = getRandomInitializeStateFunction(4);

    const wrapper = mount(
        <RecoilRoot initializeState={initializeState}>
            <SearchBar />
            <MovieSearchResult movie={sampleMovie2} />
        </RecoilRoot>,
    );
    const input = wrapper.find('input');
    expect(!input.html()?.includes('disabled=""'));
    const button = wrapper.find('.MSR_button');
    button.simulate('click');
    wrapper.update();
    expect(input.html()?.includes('disabled=""'));
});

test('SearchBar with text shows results when focused', async () => {
    const initializeState = getRandomInitializeStateFunction(4);

    const wrapper = mount(
        <RecoilRoot initializeState={initializeState}>
            <SearchBar />
        </RecoilRoot>,
    );

    const input = wrapper.find('.SearchBar_input');
    input.simulate('change', { target: { value: 'inception' } });
    let ul = wrapper.find('.SearchBar_ul');
    await waitFor(() => {
        ul.update();
        expect(wrapper.find('.MSR_li')).toHaveLength(10);
    });
    input.simulate('focus');
    ul = wrapper.find('.SearchBar_ul');
    expect(ul.get(0).props.style).toHaveProperty('height', 300);
});
