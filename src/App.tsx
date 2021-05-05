import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { Page } from './components';
import './styles/master.css';

const App: FC = () => {
    return (
        <RecoilRoot>
            <div className="App">
                <Page />
            </div>
        </RecoilRoot>
    );
};

export default App;
