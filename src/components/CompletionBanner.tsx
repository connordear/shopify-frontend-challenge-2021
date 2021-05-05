import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { nomineeCountSelector } from '../state';
import '../styles/CompletionBanner.css';

const NOMINEES_NEEDED = 5;

export const CompletionBanner: FC = () => {
    const nomineeCount = useRecoilValue(nomineeCountSelector);

    return (
        <div
            className={'CompletionBanner_wrapper'}
            style={{
                height: nomineeCount >= NOMINEES_NEEDED ? 100 : 0,
                opacity: nomineeCount >= NOMINEES_NEEDED ? 1 : 0,
            }}
        >
            {nomineeCount >= 5 && (
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
