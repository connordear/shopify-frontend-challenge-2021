import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
};
global.localStorage = localStorageMock;
jest.setTimeout(30000);

export const createDocumentListenersMock = () => {
    const listeners = {};
    const handler = (domEl, event) => listeners?.[event]?.({ target: domEl });
    document.addEventListener = jest.fn((event, cb) => {
        listeners[event] = cb;
    });
    document.removeEventListener = jest.fn((event) => {
        delete listeners[event];
    });
    return {
        mouseDown: (domEl) => handler(domEl, 'mousedown'),
        click: (domEl) => handler(domEl, 'click'),
    };
};
