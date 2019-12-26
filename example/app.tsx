import React from 'react';
import './app.scss';
import SideBar from './layout/side-bar';
import Router from './router';
import { BrowserRouter, Link } from 'react-router-dom';
import { Layout } from 'rummy-ui';

const { Header, Footer, Sider, Content } = Layout;


import { hot } from 'react-hot-loader/root';

let App = () => (<BrowserRouter>
		<Layout>
      <Header className="rummy-example-header">
        <Link className="logo" to="/">
          <img src="https://i.loli.net/2019/12/26/dfWhG1byne8jNat.png" alt=""/>
          <div className="name">Rummy UI</div>
        </Link>
      </Header>
      <Layout>
        <Sider className="rummy-example-sider">
          <SideBar/>
        </Sider>
        <Content>
          <Router/>
        </Content>
      </Layout>
      <Footer className="rummy-example-footer">
        copyright@343206347@qq.com
      </Footer>
    </Layout>
</BrowserRouter>);

export default hot(App);
