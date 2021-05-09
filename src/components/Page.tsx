import { Layout } from 'antd';
import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { NominationsList, SearchBar, CompletionBanner } from '.';
import { nomineesAtom } from '../state';
import '../styles/master.css';
import { Movie } from '../types';

const { Header, Footer, Content } = Layout;
const layoutStyle: CSSProperties = {
    width: '100%',
    margin: '0 auto',
};
export const Page: FC = () => {
    const [nominees, setNominees] = useRecoilState(nomineesAtom);

    const [titleClasses, setTitleClasses] = useState('centered-text red-highlight');

    useEffect(() => {
        setTitleClasses('centered-text red-highlight show-highlight');
        const storedMap = localStorage.LS_NOMINEES;
        if (storedMap !== undefined) {
            let parsedMap = [];
            try {
                parsedMap = JSON.parse(storedMap);
            } catch (err) {
                parsedMap = [];
            }
            setNominees(new Map<string, Movie>(parsedMap));
        }
    }, []);

    useEffect(() => {
        localStorage.LS_NOMINEES = JSON.stringify(Array.from(nominees.entries()));
    }, [nominees]);

    return (
        <Layout style={layoutStyle}>
            <Header>
                <div className={'flex-center'}>
                    <h1 className={titleClasses}>SHOPPIES</h1>
                </div>
            </Header>
            <Content>
                <CompletionBanner />
                <SearchBar />
                <NominationsList />
            </Content>
            <Footer>
                <h3 className={'bottom-right-fixed'}>Created by Connor Dear</h3>
            </Footer>
        </Layout>
    );
};
