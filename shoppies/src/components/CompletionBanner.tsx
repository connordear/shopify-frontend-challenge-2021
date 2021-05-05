import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { nomineeCountSelector } from '../state';

export const CompletionBanner: FC = () => {
    const nomineeCount = useRecoilValue(nomineeCountSelector);

    return <>{nomineeCount >= 5 && <div>All done!</div>}</>;
};
