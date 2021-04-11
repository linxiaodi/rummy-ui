import React from 'react';
import ReactDOM from 'react-dom'
import Comp from './Button.md'

// @ts-ignore
import { Button } from '../../lib';

console.log(Comp)

const Child = () => {
	return <Button>这是按钮</Button>
}

let App = () => (<div>
	<Child/>
	<Comp/>
</div>);

ReactDOM.render(<App/>, document.querySelector('#app'))

export default App;
