import React, { Component } from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

import { HashRouter,Route,Link,Redirect } from 'react-router-dom'

import styles from "@/css/app.scss"

import HomeContainer from "@/comment/home/HomeContainer"
import MovieContainer from "@/comment/movie/MovieContainer"
import AboutContainer from "@/comment/about/AboutContainer"

export default class App extends Component {
    render() {
        return <HashRouter>
            <div style={{height:'100%'}}>
                <Layout className="layout" style={{height:'85%'}} >
                    <Header>
                        <div className = { styles.logo } />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={[ location.hash.split('/')[1] || 'home' ]}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
                            <Menu.Item key="movie"><Link to="/movie">电影</Link></Menu.Item>
                            <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content className={styles.content}>
                        <Route exact path="/" render={ ()=> <Redirect to="/home" /> } />
                        <Route path="/home" component={HomeContainer} />
                        <Route path="/movie" component={MovieContainer} />
                        <Route path="/about" component={AboutContainer} />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        哒哒哒哒哒哒 ©{ new Date().getFullYear() } 冒蓝火
                    </Footer>
                </Layout>
            </div>
        </HashRouter>
    }
}
