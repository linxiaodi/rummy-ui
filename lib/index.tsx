import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './App'
import './icons/index.css'

console.log(process.env.NODE_ENV === 'development')

const App = process.env.NODE_ENV === 'development' ? hot(Hello) : Hello

ReactDOM.render(<App/>, document.querySelector('#app'))
