import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { nomineeCountSelector } from '../state';
import { MAX_NOMINEES } from '../common';
import '../styles/CompletionBanner.css';

export const CompletionBanner: FC = () => {
    const nomineeCount = useRecoilValue(nomineeCountSelector);

    return (
        <div
            className={'CompletionBanner_wrapper'}
            style={{
                height: nomineeCount >= MAX_NOMINEES ? 100 : 0,
                opacity: nomineeCount >= MAX_NOMINEES ? 1 : 0,
            }}
        >
            {nomineeCount >= MAX_NOMINEES && (
                <p className={'ribbon'}>
                    {' '}
                    <span className={'text'}>
                        <strong className={'bold'}>All Done!</strong> You&apos;re ready for the red carpet!
                    </span>
                </p>
            )}
        </div>
    );
};
