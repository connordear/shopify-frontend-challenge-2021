import { Layout, Space } from 'antd';
import React, { CSSProperties, FC } from 'react';
import { NominationsList, SearchBar, CompletionBanner } from '.';

const { Header, Footer, Content } = Layout;

const footerStyle: CSSProperties = {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    textAlign: 'center',
};
const layoutStyle: CSSProperties = {
    width: '100%',
    margin: '0 auto',
};
const contentStyle: CSSProperties = {
    margin: 50,
};

export const Page: FC = () => {
    return (
        <Layout style={layoutStyle}>
            <Header>
                <h1 className={'centered-text'}>The Shoppies</h1>
            </Header>
            <Content style={contentStyle}>
                <Space align={'center'}>
                    <SearchBar />
                    <NominationsList />
                    <CompletionBanner />
                </Space>
            </Content>
            <Footer style={footerStyle}>
                <h2 className={'centered-text'}>Connor Dear</h2>
            </Footer>
        </Layout>
    );
};
