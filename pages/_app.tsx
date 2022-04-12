require('styles/globals.less')
import styles from '../styles/App.module.css'
import type {AppProps} from 'next/app'
import {Layout, Divider} from 'antd';
import BaseContainer from "../components/UI/BaseContainer/BaseContainer";
import {Provider} from "react-redux";
import {setupStore} from "../store/store";

const {Header, Content, Footer} = Layout;

function MyApp({Component, pageProps}: AppProps) {
    const store = setupStore()

    return <BaseContainer>
        <Provider store={store}>
            <Layout className={styles.layout}>
                <Header style={{width: '100%'}}>
                    <h1 style={{color: 'white'}}>SpaceX API</h1>
                </Header>
                <Content>
                    <Component {...pageProps} />
                </Content>
                <Divider/>
                <Footer style={{textAlign: 'center'}}>Typescript, React+Redux(Toolkit+RTK), Antd, SpaceX API</Footer>
            </Layout>
        </Provider>
    </BaseContainer>
}

export default MyApp
