import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { nomineeCountSelector, nomineesAtom } from '../state';
import { NominationDisplay } from './NominationDisplay';
import { MAX_NOMINEES } from '../common';
import '../styles/NominationsList.css';

export const NominationsList: FC = () => {
    const nominees = useRecoilValue(nomineesAtom);
    const nomineeCount = useRecoilValue(nomineeCountSelector);
    return (
        <div className={'NominationsList_wrapper'}>
            {nomineeCount > 0 ? (
                <>
                    <h3 className={'centered-text NominationsList_heading'}>
                        Your Nominations ({nomineeCount}/{MAX_NOMINEES})
                    </h3>
                    <p className={'centered-text NominationsList_p'}>(Click to remove)</p>
                    <ul className={'NominationsList_ul'}>
                        {Array.from(nominees.values()).map((nominee) => (
                            <NominationDisplay key={nominee.imdbID} movie={nominee} />
                        ))}
                    </ul>
                </>
            ) : (
                <h3 className={'centered-text'}>Select a movie from the dropdown to begin.</h3>
            )}
        </div>
    );
};
