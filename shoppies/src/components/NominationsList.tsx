import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { nomineesAtom } from '../state';
import { NominationDisplay } from './NominationDisplay';

export const NominationsList: FC = () => {
    const [nominees] = useRecoilState(nomineesAtom);
    return (
        <ul>
            {Array.from(nominees.values()).map((nominee) => (
                <NominationDisplay key={nominee.imdbID} movie={nominee} />
            ))}
        </ul>
    );
};
