import { Layout, Space } from 'antd';
import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { NominationsList, SearchBar, CompletionBanner } from '.';
import '../styles/master.css';

const { Header, Footer, Content } = Layout;
const layoutStyle: CSSProperties = {
    width: '100%',
    margin: '0 auto',
};
export const Page: FC = () => {
    const [titleClasses, setTitleClasses] = useState('centered-text red-highlight');

    useEffect(() => {
        setTitleClasses('centered-text red-highlight show-highlight');
    }, []);

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
            {/* <Footer style={footerStyle}>
                <h2 className={'centered-text'}>Connor Dear</h2>
            </Footer> */}
        </Layout>
    );
};
