import { selector } from 'recoil';
import { nomineesAtom } from './nomineesAtom';

export const nomineeCountSelector = selector({
    key: 'nomineeCount',
    get: ({ get }) => {
        return get(nomineesAtom).size;
    },
});
