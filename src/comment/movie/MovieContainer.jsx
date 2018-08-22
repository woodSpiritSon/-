import React, { Component } from 'react'

// 导入Antd组件
import { Layout, Menu,  } from 'antd';
const { Header, Content, Sider } = Layout;

// 导入路由组件
import { Route,Link,Redirect,Switch } from 'react-router-dom'

import MovieDetail from "@/comment/movie/MovieDetail"
import MovieList from "@/comment/movie/MovieList"


export default class MovieContainer extends Component {
  render() {
    return <Content style={{ height: '100%' }}>
        <Layout style={{ background: '#fff' ,height: '100%'}}>
          <Sider width={200} style={{ background: '#fff', height: '100%' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[ location.hash.split('/')[2] || 'in_theaters' ]}
              style={{ height: '100%' }}>
                <Menu.Item key="in_theaters"> <Link to="/movie/in_theaters/1" >正在热映</Link> </Menu.Item>
                <Menu.Item key="coming_soon"><Link to="/movie/coming_soon/1" >即将上映</Link></Menu.Item>
                <Menu.Item key="top250"><Link to="/movie/top250/1" >Top250</Link></Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ minHeight: 280 }}>
          <Switch>
            <Route exact path="/movie" render={ ()=><Redirect to="/movie/in_theaters/1" /> } />
            <Route exact path="/movie/detail/:id" component={ MovieDetail } />
            <Route exact path="/movie/:type/:page" component={ MovieList }  />      
          </Switch>     
          </Content>
         
        </Layout>
      </Content>
  }
}
