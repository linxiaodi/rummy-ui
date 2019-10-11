import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './App'
import './icons/index.css'

const App = hot(Hello)

ReactDOM.render(<App/>, document.querySelector('#app'))
