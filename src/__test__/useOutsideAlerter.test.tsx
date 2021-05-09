import { waitFor } from '@testing-library/react';
import { mount } from 'enzyme';
import { doc } from 'prettier';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { RecoilRoot } from 'recoil';
import App from '../App';
import { createDocumentListenersMock } from '../setupTests';
import { getRandomInitializeStateFunction } from './common';

test('SearchBar hides results when clicked outside', async () => {
    const initializeState = getRandomInitializeStateFunction(4);
    const fireEvent = createDocumentListenersMock();

    const wrapper = mount(
        <RecoilRoot initializeState={initializeState}>
            <App />
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

    // Now click somewhere else on page
    act(() => {
        input.simulate('blur');
        fireEvent.mouseDown(document.body);
    });
    await waitFor(() => {
        ul.update();
    });
    ul = wrapper.find('.SearchBar_ul');
    expect(ul.get(0).props.style).toHaveProperty('height', 0);
});

test('SearchBar still displays results when clicked outside', async () => {
    const fireEvent = createDocumentListenersMock();
    const outsideDiv = document.createElement('div');
    document.body.appendChild(outsideDiv);

    const wrapper = mount(
        <RecoilRoot>
            <App />
        </RecoilRoot>,
        { attachTo: outsideDiv },
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

    // Now click on the wrapper else on page
    act(() => {
        fireEvent.mouseDown(document.querySelector('.SearchBar_input'));
    });
    await waitFor(() => {
        ul.update();
    });
    ul = wrapper.find('.SearchBar_ul');
    expect(ul.get(0).props.style).toHaveProperty('height', 300);
});
