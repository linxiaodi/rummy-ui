import React from 'react';
import 'fisher-ui/icons/index.css'
import './app.scss';
import SideBar from './layout/side-bar'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'

import { hot } from 'react-hot-loader/root';

let App = () => (<BrowserRouter>
    <div className="box">
        <SideBar/>
        <Router/>
    </div>
</BrowserRouter>)

export default hot(App);
