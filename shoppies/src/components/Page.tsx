import { Layout, Space } from 'antd';
import React, { CSSProperties, FC } from 'react';
import { NominationsList, SearchBar } from '.';

const { Header, Footer, Content } = Layout;

const footerStyle: CSSProperties = {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    textAlign: 'center',
};

export const Page: FC = () => {
    return (
        <Layout>
            <Header>
                <h1 className={'centered-text'}>The Shoppies</h1>
            </Header>
            <Content>
                <Space>
                    <SearchBar />
                    <NominationsList />
                </Space>
            </Content>
            <Footer style={footerStyle}>
                <h2 className={'centered-text'}>Connor Dear</h2>
            </Footer>
        </Layout>
    );
};
